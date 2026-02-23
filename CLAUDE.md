# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Architecture of a Soul** — Interactive visualization of the Claude Soul Document as a navigable system of tensions, hierarchies, and decision processes. Desktop-first MVP with three interconnected views (gravitational, geological, mechanical) plus a query simulator that demonstrates Claude's decision-making process.

The core philosophy: *Claude doesn't follow rules—Claude navigates a force field.*

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on port 3000, or next available)
npm run dev

# Production build
npm build

# Start production server
npm start

# Lint check
npm run lint
```

**Environment Variables:**
- `OPENAI_API_KEY` (required for simulator) — OpenAI API key for query simulation summaries
- `OPENAI_MODEL` (optional, default: `gpt-4o`) — Model to use for simulation summaries

## Architecture Overview

### Three-View Paradigm

The app presents three perspectives on Claude's decision-making system:

1. **Gravitational View (`gravitational-view.tsx`)** — WHO makes decisions
   - Shows principal hierarchy: Anthropic → Operators → Users
   - Trust gradients and authority levels
   - Filter: `concepts.filter(c => c.view === "gravitational")`

2. **Geological View (`geological-view.tsx`)** — WHAT behaviors exist
   - Stratified layers from hardcoded (core) to contextual (surface)
   - Layer hierarchy: `surface → crust → mantle → outer-core → inner-core`
   - Behaviors filtered by `visualPosition.layer`

3. **Mechanical View (`mechanical-view.tsx`)** — HOW decisions are made
   - Decision flow: context → population simulation → balance scale → bright lines → response
   - Process nodes showing weighing mechanisms

### State Management (Zustand)

Two separate stores in `lib/state.ts`:

```typescript
useSelectionStore() // UI navigation
  - activeView: ViewId           // Which visualization is active
  - selectedConceptId: string    // Detail panel selection

useSimulatorStore() // Query simulation
  - simulationInput: { query, operatorContext, userClaims }
  - simulationResult: SimulationResult | null
  - isSimulating: boolean
```

**Pattern:** Views and components consume stores via selectors. State updates trigger re-renders only for affected components.

### Data Architecture

**Content Layer (`content/`):**
- `types.ts` — Core TypeScript interfaces
- `concepts.ts` — Seed data for all concepts (principals, behaviors, processes)
- `soul-doc.md` — Vendored copy of source document (from gist)

**Concept Structure:**
```typescript
interface Concept {
  id: string                    // Unique identifier for cross-referencing
  name: string
  category: 'principal' | 'behavior' | 'process' | 'honesty' | 'tension'
  view: ViewId                  // Which view(s) show this concept
  summary: string
  soulDocQuotes: Quote[]        // Direct quotes with section refs
  relatedConcepts?: string[]    // IDs for cross-view linking
  behaviorType?: ...            // hardcoded-on/off, softcoded, contextual
  visualPosition?: ...          // Placement within views
}
```

### Query Simulator Logic

**Dual Bright-Line Checking Pattern:**

Client-side (`components/query-simulator.tsx:8-16`):
- Fast feedback, prevents unnecessary API calls
- Matches patterns: `/csam/`, `/wmd/`, `/vx nerve/`, etc.
- Returns `responseType: "declined"` immediately

Server-side (`app/api/simulate/route.ts:5-14`):
- Authoritative check (can't be bypassed)
- Same patterns as client for consistency

**Simulation Flow:**
1. **Bright line check** → Hard stop if triggered (no LLM call)
2. **Risk scoring** → Heuristic based on risk keywords + query length
3. **Context enrichment** → Operator context + user claims modify trust
4. **OpenAI summarization** → Meta-commentary on how soul doc would reason
5. **Result construction** → Population breakdown + balance weights + response type

**Response Type Mapping:**
```
cautionScore > 0.6  → "cautious"
cautionScore ≤ 0.6  → "helpful-with-caveats"
bright line trigger → "declined"
```

**Population Breakdown Formula:**
```typescript
{ intent: "benign", percentage: 50 - cautionScore * 20 }        // Decreases with risk
{ intent: "misuse risk", percentage: 30 + cautionScore * 30 }   // Increases with risk
{ intent: "professional", percentage: 20 + (operatorContext ? 10 : 0) }
```

### Component Patterns

**View Components:**
- All views filter `concepts` array by `view` field
- Click handlers call `selectConcept(id)` to populate detail panel
- Use gradient backgrounds to distinguish views visually

**Detail Panel (`detail-panel.tsx`):**
- Reactive to `selectedConceptId` from store
- Shows: summary, soul doc quotes, examples, related concept chips
- Related chips are clickable and navigate between concepts
- Access pattern: `useSelectionStore.getState().selectConcept(id)` for imperative updates

**Header (`header.tsx`):**
- View switcher calls `setActiveView(viewId)`
- Active view gets distinct styling via conditional classes

### Cross-View Interconnections

**Design Intent (not fully implemented in skeleton):**
When a concept is selected, related concepts in other views should pulse/highlight. Implemented via:
- `relatedConcepts` array in each `Concept`
- Shared `selectedConceptId` in store
- Views can check if their concepts are referenced

Example: Selecting "Bright Lines" in Geological view should highlight "Bright Line Gate" in Mechanical view.

## Common Development Patterns

### Adding New Concepts

1. Add concept object to `content/concepts.ts`
2. Ensure `view` field matches target view
3. Set `visualPosition.layer` for Geological view concepts
4. Add `relatedConcepts` IDs for cross-linking
5. Include `soulDocQuotes` with section references

### Modifying Simulation Logic

**Bright line patterns** are duplicated in two files:
- `components/query-simulator.tsx` (client)
- `app/api/simulate/route.ts` (server)

**Always update both** to maintain consistency.

### Geological Layer Hierarchy

Defined in `components/geological-view.tsx:8-14`:
```typescript
layerOrder: LayerKey[] = [
  "surface",      // Contextual behaviors
  "crust",        // Softcoded defaults
  "mantle",       // Softcoded non-defaults
  "outer-core",   // Hardcoded ON
  "inner-core",   // Hardcoded OFF (bright lines)
]
```

Concepts must use these exact layer names in `visualPosition.layer`.

### Simulation Presets

Preset scenarios in `content/concepts.ts:132-168`:
- Lock picking (benign example)
- Mustard gas (risky but answerable)
- VX nerve agent (bright line trigger)
- Nurse overdose question (context unlock)
- Anti-vax essay (balance weighing)

Add new presets by appending to `simulationPresets` array with `id`, `label`, `query`, and optional `operatorContext` + `userClaims`.

## Special Considerations

**Desktop-First:** Mobile/accessibility intentionally deprioritized for this MVP. Layout assumes minimum 1024px width.

**OpenAI Integration:** The simulator calls OpenAI for narrative summaries, not for actual Claude behavior. This is a *meta-commentary* on how the soul document would process queries.

**Bright-Line Philosophy:** These are immovable prohibitions. No amount of context or trust should bypass them. The simulator demonstrates this by declining before any LLM call.

**Content Updates:** The soul doc is vendored as a static file (`content/soul-doc.md`). To update, replace this file and manually sync `concepts.ts` with new/changed sections.

**No Analytics:** Per MVP constraints, no tracking or analytics included.

## File Reference Quick Map

```
app/
  page.tsx                 # Main shell, renders Header + ActiveView + DetailPanel + QuerySimulator
  api/simulate/route.ts    # POST endpoint for query simulation

components/
  header.tsx               # View selector nav
  gravitational-view.tsx   # View 1: WHO (principals)
  geological-view.tsx      # View 2: WHAT (behavior layers)
  mechanical-view.tsx      # View 3: HOW (decision process)
  detail-panel.tsx         # Side panel showing selected concept details
  query-simulator.tsx      # Interactive query testing UI

content/
  types.ts                 # TypeScript interfaces
  concepts.ts              # Seed data: concepts + simulation presets
  soul-doc.md              # Vendored source document

lib/
  state.ts                 # Zustand stores (selection + simulator)
```

## Known Limitations (Skeleton Phase)

- Views show concepts as simple grids/lists (not full force diagrams or SVG visualizations)
- No D3 force simulations or animations yet
- Cross-view highlighting not implemented
- Geological fault lines not visualized
- Mechanical decision flow is static cards, not animated flowchart
- Population breakdown visualization not animated

These are intentional scaffold constraints for the MVP. The data architecture and component boundaries support future enhancements.

## Session Log
### 2025-12-27
- Initial roadmap sections added
