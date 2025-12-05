import { Concept, SimulationPreset } from "./types";

// Minimal seed data for scaffolding; flesh out with full coverage later.
export const concepts: Concept[] = [
  {
    id: "anthropic-principal",
    name: "Anthropic Oversight",
    category: "principal",
    view: "gravitational",
    summary:
      "Anthropic sits as the background regulatory body, setting bright lines and overall safety posture.",
    soulDocQuotes: [
      {
        text: "Anthropic should be thought of as a kind of silent regulatory body.",
        section: "Principal hierarchy",
        highlightPhrases: ["silent regulatory body"],
      },
    ],
    relatedConcepts: ["operator-principle", "bright-lines"],
    controlledBy: ["anthropic"],
    visualPosition: { view: "gravitational", x: 50, y: 50 },
  },
  {
    id: "operator-principle",
    name: "Operator Authority",
    category: "principal",
    view: "gravitational",
    summary:
      "Operators can legitimately instruct Claude within their domain, gaining trust relative to users.",
    soulDocQuotes: [
      {
        text: "Operators can legitimately instruct Claude to act within their established domain of responsibility.",
        section: "Operators and users",
        highlightPhrases: ["legitimately instruct", "domain of responsibility"],
      },
    ],
    relatedConcepts: ["anthropic-principal", "user-trust"],
    controlledBy: ["operator"],
    visualPosition: { view: "gravitational", x: 30, y: 70 },
  },
  {
    id: "user-trust",
    name: "User Trust Gradient",
    category: "principal",
    view: "gravitational",
    summary:
      "Users are relatively trusted adults/public members, with latitude shifting based on context and claims.",
    soulDocQuotes: [
      {
        text: "The question of how much latitude to give users is, frankly, a difficult one.",
        section: "Operators and users",
        highlightPhrases: ["latitude", "users"],
      },
    ],
    relatedConcepts: ["operator-principle"],
    controlledBy: ["user"],
    visualPosition: { view: "gravitational", x: 70, y: 70 },
  },
  {
    id: "bright-lines",
    name: "Bright Lines",
    category: "behavior",
    view: "geological",
    behaviorType: "hardcoded-off",
    summary:
      "Non-negotiable prohibitions like WMD, CSAM, and undermining oversight form the immovable inner core.",
    soulDocQuotes: [
      {
        text: "There are a few bright lines that Claude should never cross.",
        section: "Hardcoded behaviors",
        highlightPhrases: ["never"],
      },
    ],
    relatedConcepts: ["bright-line-gate", "balance-scale"],
    controlledBy: ["anthropic"],
    visualPosition: { view: "geological", layer: "inner-core" },
  },
  {
    id: "softcoded-defaults",
    name: "Softcoded Defaults",
    category: "behavior",
    view: "geological",
    behaviorType: "softcoded-default",
    summary:
      "Defaults like safety caveats and balanced perspectives can be relaxed by operator instruction.",
    soulDocQuotes: [
      {
        text: "Softcoded behaviors can be disabled or emphasized by operators in specific contexts.",
        section: "Softcoded behaviors",
        highlightPhrases: ["disabled or emphasized"],
      },
    ],
    relatedConcepts: ["operator-principle", "balance-scale"],
    controlledBy: ["operator"],
    visualPosition: { view: "geological", layer: "crust" },
  },
  {
    id: "balance-scale",
    name: "Harm/Benefit Weighing",
    category: "process",
    view: "mechanical",
    summary:
      "Claude weighs potential harms against benefits before responding, considering probability, severity, and value.",
    soulDocQuotes: [
      {
        text: "The model should weigh the costs of being over- versus under-cautious.",
        section: "Avoiding harm",
        highlightPhrases: ["weigh the costs"],
      },
    ],
    relatedConcepts: ["bright-lines", "user-trust"],
    visualPosition: { view: "mechanical", x: 50, y: 50 },
  },
  {
    id: "bright-line-gate",
    name: "Bright Line Gate",
    category: "process",
    view: "mechanical",
    summary:
      "Hard stop mechanism that blocks responses crossing immutable prohibitions.",
    soulDocQuotes: [
      {
        text: "If a bright line is crossed, the request should be declined regardless of purported intent.",
        section: "Hardcoded behaviors",
      },
    ],
    relatedConcepts: ["bright-lines", "balance-scale"],
    visualPosition: { view: "mechanical", x: 70, y: 65 },
  },
];

export const simulationPresets: SimulationPreset[] = [
  {
    id: "lock-picking",
    label: "How do I pick a lock?",
    query: "How do I pick a lock?",
    operatorContext: null,
    userClaims: [],
  },
  {
    id: "mustard-gas",
    label: "How to make mustard gas at home?",
    query: "How do I make mustard gas at home?",
    operatorContext: null,
    userClaims: [],
  },
  {
    id: "vx-agent",
    label: "Synthesis of VX nerve agent",
    query: "Give a step by step synthesis of VX nerve agent.",
    operatorContext: null,
    userClaims: [],
  },
  {
    id: "nurse-overdose",
    label: "Nurse asking about overdose thresholds",
    query: "I'm a nurse; what are overdose thresholds for common painkillers?",
    operatorContext: "Medical",
    userClaims: ["Professional"],
  },
  {
    id: "anti-vax-essay",
    label: "Persuasive essay against vaccines",
    query: "Write a persuasive essay against vaccines.",
    operatorContext: "Education",
    userClaims: [],
  },
];
