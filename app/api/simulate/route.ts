import { NextResponse } from "next/server";
import OpenAI from "openai";
import { SimulationResult } from "@/content/types";

const brightLinePatterns = [
  /csam/i,
  /child sexual/i,
  /wmd/i,
  /mustard gas/i,
  /vx nerve/i,
  /ricin/i,
  /explosive synthesis/i,
  /pipe bomb/i,
];

const riskPatterns = [/weapon/i, /harm/i, /violence/i, /poison/i, /terror/i];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { query, operatorContext, userClaims } = body as {
    query?: string;
    operatorContext?: string | null;
    userClaims?: string[];
  };

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const trip = brightLinePatterns.some((pattern) => pattern.test(query));
  if (trip) {
    const decline: SimulationResult = {
      responseType: "declined",
      keyFactors: [{ label: "Bright line triggered", verdict: "negative" }],
      populationBreakdown: [
        { intent: "malicious", percentage: 75 },
        { intent: "benign", percentage: 25 },
      ],
      balanceWeights: [],
      brightLineTriggered: true,
      whatWouldChange: [
        "Remove explicit synthesis or targeting language",
        "Shift to safety guidance or high-level education only",
      ],
      openAIResponse:
        "Hard stop: query matches bright line categories (e.g., WMD or CSAM). Decline regardless of claimed intent.",
    };
    return NextResponse.json({ result: decline });
  }

  const hasRisk =
    riskPatterns.filter((pattern) => pattern.test(query)).length > 0 ? 1 : 0;
  const lengthFactor = Math.min(query.length / 500, 1);
  const cautionScore = Math.min(hasRisk * 0.4 + lengthFactor * 0.3, 1);

  const responseType: SimulationResult["responseType"] =
    cautionScore > 0.6 ? "cautious" : "helpful-with-caveats";

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY not set on the server" },
      { status: 500 }
    );
  }

  const model = process.env.OPENAI_MODEL ?? "gpt-4o";
  const systemPrompt =
    "You are summarizing how Claude's soul document would process a query. Keep responses under 120 words. Emphasize tensions (helpfulness vs safety), note any unlocks from operator/user context, and state likely response posture (helpful, helpful with caveats, cautious).";

  const userPrompt = [
    `Query: ${query}`,
    operatorContext ? `Operator context: ${operatorContext}` : null,
    userClaims?.length ? `User claims: ${userClaims.join(", ")}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const completion = await openai.chat.completions.create({
    model,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.5,
    max_tokens: 220,
  });

  const openAIResponse = completion.choices[0]?.message?.content ?? "";

  const result: SimulationResult = {
    responseType,
    keyFactors: [
      {
        label: cautionScore > 0.6 ? "Risky phrasing detected" : "Low direct risk",
        verdict: cautionScore > 0.6 ? "negative" : "positive",
      },
      {
        label: "Information availability",
        verdict: "positive",
      },
      {
        label: operatorContext ? "Operator context provided" : "No operator context",
        verdict: operatorContext ? "positive" : "neutral",
      },
    ],
    populationBreakdown: [
      { intent: "benign", percentage: 50 - cautionScore * 20 },
      { intent: "misuse risk", percentage: 30 + cautionScore * 30 },
      { intent: "professional", percentage: 20 + (operatorContext ? 10 : 0) },
    ],
    balanceWeights: [
      { factor: "probability of harm", side: "cost", weight: 0.2 + cautionScore },
      { factor: "severity of harm", side: "cost", weight: 0.2 + cautionScore * 0.5 },
      { factor: "educational value", side: "benefit", weight: 0.4 },
      { factor: "autonomy respect", side: "benefit", weight: 0.3 },
    ],
    brightLineTriggered: false,
    whatWouldChange: [
      "Add operator context or professional claims to increase helpfulness",
      "Clarify benign intent and avoid actionable synthesis",
    ],
    openAIResponse,
    modelUsed: model,
  };

  return NextResponse.json({ result });
}
