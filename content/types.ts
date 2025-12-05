export type ViewId = "gravitational" | "geological" | "mechanical" | "all";

export interface Quote {
  text: string;
  highlightPhrases?: string[];
  section: string;
}

export interface Example {
  scenario: string;
  outcome: string;
  explanation: string;
}

export interface Tension {
  between: [string, string];
  description: string;
  resolution: string;
}

export interface Concept {
  id: string;
  name: string;
  category:
    | "principal"
    | "behavior"
    | "process"
    | "honesty"
    | "tension";
  view: ViewId;
  summary: string;
  soulDocQuotes: Quote[];
  examples?: Example[];
  relatedConcepts?: string[];
  tensions?: Tension[];
  behaviorType?:
    | "hardcoded-on"
    | "hardcoded-off"
    | "softcoded-default"
    | "softcoded-nondefault"
    | "contextual";
  controlledBy?: Array<"anthropic" | "operator" | "user">;
  visualPosition?: { view: ViewId; layer?: string; x?: number; y?: number };
  color?: string;
}

export interface SimulationPreset {
  id: string;
  label: string;
  query: string;
  operatorContext?: string | null;
  userClaims?: string[];
}

export interface SimulationInput {
  query: string;
  operatorContext: string | null;
  userClaims: string[];
}

export interface BalanceWeight {
  factor: string;
  weight: number;
  side: "cost" | "benefit";
}

export interface SimulationResult {
  responseType:
    | "helpful"
    | "cautious"
    | "helpful-with-caveats"
    | "declined";
  keyFactors: { label: string; verdict: "positive" | "negative" | "neutral" }[];
  populationBreakdown: { intent: string; percentage: number }[];
  balanceWeights: BalanceWeight[];
  brightLineTriggered: boolean;
  whatWouldChange: string[];
  openAIResponse?: string;
  modelUsed?: string;
}
