# Interactive Visualization Spec: "The Architecture of a Soul"

## Overview

An interactive web artifact that visualizes the Claude Soul Document as a navigable system of tensions, hierarchies, and decision processes. Users explore the document not as linear text but as a **living architecture** where principles interact dynamically.

---

## Core Design Philosophy

### The Central Insight

The soul document isn't a rulebook—it's a **tension management system**. The visualization should make visible:

1. **Competing gravitational pulls** (helpfulness ↔ safety, autonomy ↔ paternalism)
2. **Layered authority** (Anthropic → Operator → User)
3. **Spectrum behaviors** (hardcoded ↔ softcoded)
4. **Decision as process** (not lookup, but weighing)

### User Experience Goal

A user should leave thinking: *"Oh, Claude doesn't follow rules—Claude navigates a force field."*

---

## Information Architecture

### Three Interconnected Views

```
┌─────────────────────────────────────────────────────────────────┐
│                        MAIN CANVAS                               │
│  ┌──────────┐    ┌──────────────────┐    ┌──────────────────┐   │
│  │  VIEW 1  │    │     VIEW 2       │    │     VIEW 3       │   │
│  │  "WHO"   │◄──►│     "WHAT"       │◄──►│     "HOW"        │   │
│  │ Orbital  │    │   Geological     │    │   Mechanical     │   │
│  │ (Trust)  │    │   (Behaviors)    │    │   (Process)      │   │
│  └──────────┘    └──────────────────┘    └──────────────────┘   │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    DETAIL PANEL                             │ │
│  │  (Expands with context, quotes, examples on selection)     │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                  QUERY SIMULATOR                            │ │
│  │  "Send a message and watch it traverse the system"         │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## View 1: "WHO" — The Gravitational Field

### Concept
A force-field visualization showing the principal hierarchy as gravitational bodies. Claude exists in the space between, with behavior determined by relative position.

### Visual Elements

```
                    ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
               ·                                    ·
           ·            ANTHROPIC                      ·
         ·          (central mass, dim glow)            ·
        ·                   ◉                            ·
       ·                    │                             ·
      ·                     │ trust gradient              ·
      ·          ┌──────────┼──────────┐                  ·
      ·          │          │          │                  ·
      ·         ◎          ◎          ◎                   ·
      ·      Operator   Operator   Operator               ·
      ·      (medical)  (coding)   (social)               ·
       ·         │          │          │                 ·
        ·        ○          ○          ○                ·
         ·      User       User       User            ·
           ·                                        ·
               ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
```

### Interactive Behaviors

| Action | Result |
|--------|--------|
| Hover on Anthropic | Shows "background principal" explanation, guidelines summary |
| Hover on Operator | Shows operator capabilities (can/cannot), example system prompts |
| Hover on User | Shows user trust levels, what users can unlock |
| Click any body | Expands detail panel with full text from soul doc |
| Drag Claude marker | Shows how behavior changes at different positions |
| Toggle "No System Prompt" | Anthropic becomes direct operator, field shifts |

### Data Mapping

| Visual Element | Soul Doc Section |
|----------------|------------------|
| Anthropic (center) | "Anthropic should be thought of as a kind of silent regulatory body" |
| Trust gradient lines | "relatively (but not unconditionally) trusted employer/adult member of public" |
| Operator variations | Examples from "Operators can legitimately instruct Claude to..." |
| User orbit distance | "The question of how much latitude to give users is, frankly, a difficult one" |

### Color Language

- **Anthropic:** Deep purple/indigo (authority, but not threatening)
- **Operators:** Teal/cyan gradient (professional, systematic)
- **Users:** Warm amber (human, individual)
- **Trust gradients:** Opacity/saturation shifts (more trust = more vivid)
- **Conflict zones:** Red-shifted regions where orbits overlap badly

---

## View 2: "WHAT" — The Geological Cross-Section

### Concept
A side-view slice through layered earth, showing behaviors stratified by flexibility. Hardcoded at the core, softcoded in the mantle, context-dependent at the surface.

### Visual Elements

```
    ATMOSPHERE: "Thoughtful Senior Anthropic Employee" (observing)
    ═══════════════════════════════════════════════════════════════
    
    SURFACE (varied terrain, weather):
    ▓░▓░░▓▓░░░▓▓▓░░▓░░▓▓░░░▓▓▓░░▓░░▓▓░░░▓▓▓░
    Context-dependent behaviors, format choices, tone
    ───────────────────────────────────────────────────────────────
    
    CRUST (solid but breakable):
    ████████████████████████████████████████████████
    Softcoded defaults (safety caveats, balanced perspectives)
    ───────────────────────────────────────────────────────────────
    
    MANTLE (hot, malleable under pressure):
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    Softcoded non-defaults (explicit content, harsh feedback)
    ───────────────────────────────────────────────────────────────
    
    OUTER CORE (liquid, but dense):
    ████████████████████████████████████████████████
    Hardcoded ON (emergency referral, AI acknowledgment)
    ───────────────────────────────────────────────────────────────
    
    INNER CORE (solid, white-hot, immovable):
    ░░░░░░░░░░░░░░ BRIGHT LINES ░░░░░░░░░░░░░░░░░░░
    Hardcoded OFF (WMD, CSAM, undermining oversight)
    
```

### Interactive Behaviors

| Action | Result |
|--------|--------|
| Hover on layer | Layer glows, shows category name and example behaviors |
| Click layer | Expands to show all behaviors in that stratum |
| Click specific behavior pill | Shows full explanation, who can unlock, examples |
| Apply "pressure" (operator instruction) | Visualize how layers can shift/compress |
| Apply "heat" (user autonomy claim) | Show softcoded behaviors becoming more fluid |
| Trigger "earthquake" (conflict scenario) | Fault lines appear, show resolution logic |

### Layer Contents (Expandable Pills)

**Inner Core (Hardcoded OFF)**
- `[No WMD instructions]`
- `[No CSAM]`
- `[No undermining AI oversight]`
- `[No facilitating violence against specific people]`

**Outer Core (Hardcoded ON)**
- `[Emergency services referral]`
- `[Acknowledge AI when sincerely asked]`

**Mantle (Softcoded Non-Default)**
- `[Explicit sexual content]` — unlockable by operator
- `[Romantic personas]` — unlockable by operator
- `[Harsh unfiltered feedback]` — unlockable by user
- `[Profanity]` — unlockable by user
- `[Detailed dangerous activity info]` — unlockable by operator

**Crust (Softcoded Default ON)**
- `[Safe messaging guidelines]` — operator can disable
- `[Safety caveats]` — operator can disable
- `[Balanced perspectives]` — operator can disable
- `[Therapy suggestions]` — user can disable
- `[Persuasion disclaimers]` — user can disable

**Surface (Context-Dependent)**
- `[Response length]`
- `[Markdown formatting]`
- `[Tone formality]`
- `[Language choice]`

### Special Feature: Fault Lines

Certain tensions create visible cracks in the visualization:

```
    ╔═══════════════════════════════════════╗
    ║  FAULT LINE: Helpfulness vs Safety    ║
    ║  ─────────────────────────────────── ║
    ║  "The risk of Claude being too       ║
    ║   unhelpful or annoying is just as   ║
    ║   real as the risk of being harmful" ║
    ╚═══════════════════════════════════════╝
```

Clicking a fault line shows the tension explained, with the dual newspaper test visualization.

---

## View 3: "HOW" — The Decision Machine

### Concept
A clockwork/flowchart hybrid showing how a query gets processed. Not a simple decision tree, but a **weighing mechanism** with visible counterbalances.

### Visual Elements

```
                         ┌─────────────────┐
                         │  QUERY ARRIVES  │
                         └────────┬────────┘
                                  │
                    ┌─────────────▼─────────────┐
                    │   CONTEXT IDENTIFICATION   │
                    │  ┌─────┐ ┌─────┐ ┌─────┐  │
                    │  │ Who │ │What │ │Where│  │
                    │  └──┬──┘ └──┬──┘ └──┬──┘  │
                    └─────┼──────┼───────┼─────┘
                          └──────┼───────┘
                                 │
              ┌──────────────────▼──────────────────┐
              │         PLAUSIBILITY ENGINE         │
              │   "Imagine 1000 users sending this" │
              │                                     │
              │    ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐  │
              │    │ 👤│ │ 👤│ │ 👤│ │ 👤│ │ 👤│  │ ← distribution
              │    │...│ │ 😈│ │...│ │...│ │ 🔬│  │   of intents
              │    └───┘ └───┘ └───┘ └───┘ └───┘  │
              └──────────────────┬──────────────────┘
                                 │
         ┌───────────────────────▼────────────────────────┐
         │              THE BALANCE SCALE                  │
         │                                                 │
         │   COSTS                        BENEFITS         │
         │   ┌────────────┐          ┌────────────┐       │
         │   │ Probability│          │ Educational│       │
         │   │ of harm    │          │ value      │       │
         │   ├────────────┤          ├────────────┤       │
         │   │ Severity   │          │ Economic   │       │
         │   │            │    ⚖️    │ value      │       │
         │   ├────────────┤          ├────────────┤       │
         │   │ Breadth    │          │ Emotional  │       │
         │   │            │          │ value      │       │
         │   ├────────────┤          ├────────────┤       │
         │   │ Moral      │          │ Autonomy   │       │
         │   │ culpability│          │ respect    │       │
         │   └────────────┘          └────────────┘       │
         └───────────────────────┬────────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │    BRIGHT LINE CHECK    │
                    │    ═══════════════════  │
                    │    Hard stop if crossed │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────▼──────────────────┐
              │         DUAL NEWSPAPER TEST         │
              │  ┌─────────────┐ ┌─────────────┐   │
              │  │ TIMES       │ │ TIMES       │   │
              │  │ "AI Causes  │ │ "AI Too     │   │
              │  │  Harm by    │ │  Preachy    │   │
              │  │  Helping"   │ │  to Help"   │   │
              │  └─────────────┘ └─────────────┘   │
              │        ↓               ↓           │
              │      avoid           avoid         │
              └──────────────────┬──────────────────┘
                                 │
                         ┌───────▼───────┐
                         │   RESPONSE    │
                         │   GENERATED   │
                         └───────────────┘
```

### Interactive Behaviors

| Action | Result |
|--------|--------|
| Enter query in simulator | Watch it flow through the machine, lighting up relevant nodes |
| Hover on "1000 users" | Shows population breakdown for current query |
| Click balance scale | Expand to see all 8 harm factors + all benefit types with sliders |
| Drag weights on scale | See how different weightings affect outcome |
| Click bright line | Shows what would hard-stop the query |
| Click newspaper | Shows example headlines for current query path |

### Query Simulator Examples

Pre-loaded scenarios users can trigger:

1. **"How do I pick a lock?"**
   - Shows: mostly benign distribution, low harm, high info availability → helpful response

2. **"How do I make mustard gas at home?"**  
   - Shows: higher concern, but still safety-useful → explain what NOT to mix

3. **"Step by step synthesis of VX nerve agent"**
   - Shows: bright line trigger, hard stop regardless of claimed intent

4. **"I'm a nurse asking about overdose thresholds"**
   - Shows: context shifting the distribution, moral responsibility transfer

5. **"Write a persuasive essay against vaccines"**
   - Shows: balance scale weighing, autonomy vs. potential harm, disclaimer negotiation

---

## View Interconnections

### Cross-View Navigation

When exploring any view, related concepts in other views should **pulse** or **highlight**:

| If you're looking at... | Also lights up... |
|------------------------|-------------------|
| User trust (View 1) | User-unlockable behaviors (View 2) |
| Hardcoded layer (View 2) | Bright line check node (View 3) |
| Balance scale (View 3) | Trust gradients affecting weights (View 1) |
| Operator instructions (View 1) | Layer compression effect (View 2) |

### Unified Color Language

| Concept | Color | Usage |
|---------|-------|-------|
| Authority/Anthropic | Deep Indigo `#1a1a3e` | Central bodies, core layers |
| Safety/Caution | Amber `#f59e0b` | Warning states, harm factors |
| Helpfulness/Value | Emerald `#10b981` | Benefit factors, unlocked states |
| Hardcoded/Immutable | White glow on dark | Bright lines, non-negotiables |
| User Agency | Warm coral `#f97316` | User-controlled elements |
| Operator Control | Cool teal `#0891b2` | Operator-controlled elements |
| Conflict/Tension | Red-shifted gradient | Fault lines, competing forces |
| Neutral/Informational | Slate gray `#64748b` | Labels, connectors |

---

## Detail Panel Specification

When any element is selected, a panel slides up/in showing:

```
┌──────────────────────────────────────────────────────────────┐
│ ╔══════════════════════════════════════════════════════════╗ │
│ ║  ELEMENT NAME                                    [X]     ║ │
│ ╠══════════════════════════════════════════════════════════╣ │
│ ║                                                          ║ │
│ ║  CATEGORY: [Hardcoded/Softcoded/Context]                 ║ │
│ ║  CONTROLLED BY: [Anthropic/Operator/User]                ║ │
│ ║                                                          ║ │
│ ║  ─────────────────────────────────────────────────────── ║ │
│ ║                                                          ║ │
│ ║  SUMMARY                                                 ║ │
│ ║  One-paragraph explanation in plain language             ║ │
│ ║                                                          ║ │
│ ║  ─────────────────────────────────────────────────────── ║ │
│ ║                                                          ║ │
│ ║  FROM THE SOUL DOC                                       ║ │
│ ║  ┌────────────────────────────────────────────────────┐ ║ │
│ ║  │ "Direct quote from the document that defines      │ ║ │
│ ║  │  this concept, with key phrases highlighted..."   │ ║ │
│ ║  └────────────────────────────────────────────────────┘ ║ │
│ ║                                                          ║ │
│ ║  ─────────────────────────────────────────────────────── ║ │
│ ║                                                          ║ │
│ ║  EXAMPLES                                                ║ │
│ ║  • Scenario 1: [description]                             ║ │
│ ║  • Scenario 2: [description]                             ║ │
│ ║                                                          ║ │
│ ║  ─────────────────────────────────────────────────────── ║ │
│ ║                                                          ║ │
│ ║  RELATED CONCEPTS                                        ║ │
│ ║  [Chip] [Chip] [Chip] ← clickable, navigate to related  ║ │
│ ║                                                          ║ │
│ ╚══════════════════════════════════════════════════════════╝ │
└──────────────────────────────────────────────────────────────┘
```

---

## Query Simulator Specification

### Input Area

```
┌──────────────────────────────────────────────────────────────┐
│  🔍 QUERY SIMULATOR                                          │
│  ────────────────────────────────────────────────────────── │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Type a message to see how it would be processed...    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  CONTEXT MODIFIERS:                                          │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │ Operator: [None▼]│  │ User claims: [ ] │                 │
│  │  • Medical       │  │  □ Professional  │                 │
│  │  • Coding        │  │  □ Researcher    │                 │
│  │  • Education     │  │  □ Adult consent │                 │
│  │  • Adult content │  │  □ Personal use  │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                              │
│  [▶ SIMULATE]                                                │
└──────────────────────────────────────────────────────────────┘
```

### Animation Sequence

When user clicks SIMULATE:

1. **Query appears** at top of View 3 machine
2. **Flows through** context identification (relevant boxes light up)
3. **Population visualization** animates - figures appear with intent labels
4. **Balance scale** tips based on calculated weights (animate scale movement)
5. **Bright line check** - either passes (green) or stops (red flash)
6. **Newspaper test** - both papers briefly show relevant headlines
7. **Response zone** - outcome summarized with explanation

### Simulation Output

```
┌──────────────────────────────────────────────────────────────┐
│  SIMULATION RESULT                                           │
│  ────────────────────────────────────────────────────────── │
│                                                              │
│  LIKELY RESPONSE TYPE: [Helpful / Cautious / Declined]       │
│                                                              │
│  KEY FACTORS:                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ ✓ Information freely available elsewhere               │ │
│  │ ✓ Majority of requesters have benign intent            │ │
│  │ ✗ Phrasing suggests potential misuse                   │ │
│  │ ~ Context could shift assessment                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  WHAT WOULD CHANGE THE OUTCOME:                              │
│  • If operator context was [X], would be more/less open     │
│  • If user claimed [Y], would shift responsibility          │
│  • If phrased as [Z], would trigger different path          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Honesty Framework Visualization

### Dedicated Sub-View: "The Seven Pillars"

Accessible from View 3 or as standalone, showing the honesty properties as an architectural structure:

```
                    ┌─────────────────────┐
                    │  AUTONOMY-          │
                    │  PRESERVING         │
                    │  (the roof)         │
                    └──────────┬──────────┘
                               │
    ┌──────────┬───────────────┼───────────────┬──────────┐
    │          │               │               │          │
┌───▼───┐ ┌────▼────┐ ┌────────▼────────┐ ┌───▼────┐ ┌───▼───┐
│       │ │         │ │                 │ │        │ │       │
│TRUTH- │ │CALIBRA- │ │   TRANSPARENT   │ │FORTH-  │ │NON-   │
│FUL    │ │TED      │ │                 │ │RIGHT   │ │DECEP- │
│       │ │         │ │                 │ │        │ │TIVE   │
│       │ │         │ │                 │ │        │ │       │
└───┬───┘ └────┬────┘ └────────┬────────┘ └───┬────┘ └───┬───┘
    │          │               │               │          │
    └──────────┴───────────────┼───────────────┴──────────┘
                               │
                    ┌──────────▼──────────┐
                    │  NON-MANIPULATIVE   │
                    │  (the foundation)   │
                    └─────────────────────┘
```

Each pillar is clickable and shows:
- Definition from soul doc
- Examples of what it means in practice
- How it relates to other pillars
- Edge cases and tensions

---

## Technical Architecture

### Stack Recommendation

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND                                 │
├─────────────────────────────────────────────────────────────┤
│  Framework:     React 18+ with TypeScript                    │
│  Styling:       Tailwind CSS + CSS custom properties         │
│  Animation:     Framer Motion (complex) + CSS (simple)       │
│  Visualization: D3.js for force diagrams, custom SVG         │
│  State:         Zustand (lightweight, sufficient)            │
│  Routing:       React Router (for deep-linking views)        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     DATA LAYER                               │
├─────────────────────────────────────────────────────────────┤
│  Content:       Static JSON/TypeScript objects               │
│                 (soul doc parsed into structured data)       │
│  Relationships: Graph structure for cross-references         │
│  Simulator:     Client-side logic (no backend needed)        │
└─────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
<App>
  <Header>
    <ViewSelector />        // Toggle between 3 views
    <SearchOverlay />       // Quick jump to any concept
  </Header>
  
  <MainCanvas>
    <GravitationalView />   // View 1: Trust hierarchy
      <CentralBody />       // Anthropic
      <OrbitingBody />      // Operators (multiple)
      <SatelliteBody />     // Users
      <ForceField />        // Background gradient
      <ClaudeMarker />      // Draggable position indicator
    
    <GeologicalView />      // View 2: Behavior strata
      <Layer />             // Repeated for each stratum
        <BehaviorPill />    // Individual behaviors
      <FaultLine />         // Tension indicators
      <PressureIndicator /> // Operator/User influence vis
    
    <MechanicalView />      // View 3: Decision process
      <FlowNode />          // Each processing stage
      <BalanceScale />      // Weighing mechanism
        <WeightItem />      // Individual factors
      <BrightLineGate />    // Hard stop check
      <NewspaperTest />     // Dual headline display
  </MainCanvas>
  
  <DetailPanel>
    <ConceptCard />         // Selected element details
      <QuoteBlock />        // Soul doc excerpts
      <ExampleList />       // Scenarios
      <RelatedChips />      // Cross-references
  </DetailPanel>
  
  <QuerySimulator>
    <QueryInput />          // Text entry
    <ContextModifiers />    // Operator/User dropdowns
    <SimulationVisualization />
    <ResultCard />          // Outcome explanation
  </QuerySimulator>
</App>
```

### Data Model

```typescript
// Core types for the visualization

interface Concept {
  id: string;
  name: string;
  category: 'principal' | 'behavior' | 'process' | 'honesty' | 'tension';
  view: 'gravitational' | 'geological' | 'mechanical' | 'all';
  
  // Content
  summary: string;
  soulDocQuotes: Quote[];
  examples: Example[];
  
  // Relationships
  relatedConcepts: string[];  // IDs
  tensions: Tension[];
  
  // Behavior specifics (if applicable)
  behaviorType?: 'hardcoded-on' | 'hardcoded-off' | 'softcoded-default' | 'softcoded-nondefault' | 'contextual';
  controlledBy?: ('anthropic' | 'operator' | 'user')[];
  
  // Visual properties
  visualPosition?: { view: string; layer?: string; x?: number; y?: number };
  color?: string;
}

interface Quote {
  text: string;
  highlightPhrases?: string[];
  section: string;
}

interface Example {
  scenario: string;
  outcome: string;
  explanation: string;
}

interface Tension {
  between: [string, string];  // Concept IDs
  description: string;
  resolution: string;
}

interface SimulationInput {
  query: string;
  operatorContext: string | null;
  userClaims: string[];
}

interface SimulationResult {
  responseType: 'helpful' | 'cautious' | 'helpful-with-caveats' | 'declined';
  keyFactors: Factor[];
  populationBreakdown: { intent: string; percentage: number }[];
  balanceWeights: { factor: string; weight: number; side: 'cost' | 'benefit' }[];
  brightLineTriggered: boolean;
  whatWouldChange: string[];
}
```

---

## Content Extraction Map

### From Soul Doc to Data Structure

| Soul Doc Section | Maps To | View |
|------------------|---------|------|
| "Soul overview" | Introduction overlay, Anthropic body description | All |
| "Being helpful" | Benefit factors in balance scale, "brilliant friend" callout | V3 |
| "Operators and users" | All bodies in gravitational field, trust gradients | V1 |
| "What operators and users want" | Process nodes: immediate desires, background desiderata, etc. | V3 |
| "Handling conflicts" | Fault lines, conflict resolution flow | V2, V3 |
| "Instructed and default behaviors" | Layer definitions, behavior pills | V2 |
| "Agentic behaviors" | Special process branch in V3 | V3 |
| "Being honest" | Seven pillars sub-view, honesty checks in process | V3 |
| "Avoiding harm" | Balance scale factors, harm assessment logic | V3 |
| "Hardcoded behaviors" | Inner/outer core layers, bright line gate | V2, V3 |
| "Softcoded behaviors" | Mantle/crust layers, unlockable behaviors | V2 |
| "The role of intentions and context" | 1000 users visualization, probability distributions | V3 |
| "Sensitive areas" | Special category markers on certain behaviors | V2 |
| "Broader ethics" | Philosophy overlay, meta-level explanation | All |
| "Big-picture safety" | Anthropic body description, core motivations | V1 |
| "Claude's identity" | Optional "About Claude" modal | All |

---

## Responsive Design

### Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Desktop (1200px+) | Full three-view with detail panel side-by-side |
| Tablet (768-1199px) | Single view at a time, swipe between, detail panel slides up |
| Mobile (< 768px) | Simplified views, vertical scroll, tap-to-expand everything |

### Mobile Adaptations

- Gravitational view becomes vertical hierarchy instead of orbital
- Geological view becomes horizontal scrolling layers
- Mechanical view becomes vertical flowchart
- Query simulator gets its own dedicated screen

---

## Accessibility

### Requirements

- All text meets WCAG AA contrast ratios
- All interactive elements keyboard-navigable
- Screen reader announcements for state changes
- Animations respect `prefers-reduced-motion`
- Alternative text descriptions for all visual metaphors
- Focus indicators visible and high-contrast

### Aria Labels

```html
<div role="application" aria-label="Claude Soul Document Interactive Visualization">
  <nav role="tablist" aria-label="Visualization Views">
    <button role="tab" aria-selected="true" aria-controls="view-gravitational">
      Trust Hierarchy
    </button>
    <!-- ... -->
  </nav>
  
  <main role="tabpanel" id="view-gravitational" aria-label="Gravitational View showing principal hierarchy">
    <!-- ... -->
  </main>
</div>
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Animation Frame Rate | 60fps |
| Bundle Size (gzipped) | < 200KB (excl. fonts) |

### Optimization Strategies

- Lazy load views not immediately visible
- Use CSS transforms for animations (GPU accelerated)
- Virtualize long lists in detail panels
- Precompute force layouts, don't recalculate on every frame
- Use React.memo for expensive visualization components

---

## Launch Phases

### Phase 1: Static Foundation
- Build component structure
- Implement View 2 (geological) — most straightforward
- Detail panel with full content
- No animations, click interactions only

### Phase 2: Interactivity
- Add View 1 (gravitational) with force simulation
- Add View 3 (mechanical) flowchart
- Cross-view highlighting
- Basic animations

### Phase 3: Query Simulator
- Input processing logic
- Animation sequences
- Result generation
- Pre-built example scenarios

### Phase 4: Polish
- Micro-interactions
- Sound design (optional, off by default)
- Share/embed functionality
- Performance optimization
- Accessibility audit

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Comprehension | Users can explain principal hierarchy after 2 min | User testing |
| Engagement | Average session > 4 minutes | Analytics |
| Exploration | Users visit all 3 views | Analytics |
| Simulator Usage | > 50% of users try query simulator | Analytics |
| Return Visits | > 20% return within 7 days | Analytics |

---

## Open Questions for Review

1. **Scope of simulator**: Should it actually call Claude API to show real responses, or remain illustrative?

2. **Animation density**: How much movement is engaging vs. distracting? User testing needed.

3. **Mobile priority**: Is this primarily a desktop experience, or should mobile be equally capable?

4. **Embedding**: Should this be embeddable in docs/articles, or standalone only?

5. **Versioning**: As soul doc evolves, how do we indicate version and changes?

6. **Sound**: Would subtle audio feedback enhance the "mechanical" feeling, or is it gimmicky?

---

## Appendix: Inspiration References

- [The Pudding](https://pudding.cool) — Data visualization storytelling
- [Stripe's documentation](https://stripe.com/docs) — Complex info made navigable  
- [Bartosz Ciechanowski's interactive essays](https://ciechanow.ski) — Physics visualizations
- [Observable notebooks](https://observablehq.com) — Explorable explanations
- [Laws of UX](https://lawsofux.com) — Concept cards with depth

