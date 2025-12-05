## MVP Implementation Plan

Constraints: Desktop-first, minimal accessibility/mobile concerns. Use OpenAI live calls (`gpt-4o` primary, `gpt-4o-mini` fallback). Vendor the soul doc from the provided gist as a static copy. No analytics.

### Stack & Project Setup
- Next.js 14 (App Router) with TypeScript on Vercel.
- Tailwind for layout/theme with CSS variables for palette; Framer Motion for key animations; D3 utilities for positioning; Zustand for global selection/search state.
- Environment variable: `OPENAI_API_KEY`. API route to call OpenAI; lightweight bright-line gate client-side.

### Data & Content
- Vendor `content/soul-doc.md` from the gist (no runtime fetch).
- Types: `Concept`, `Quote`, `Example`, `Tension`, `SimulationPreset`, `SimulationResult`.
- Script or manual mapping to produce `content/concepts.ts` (summaries, quotes with section refs, relationships, behavior metadata).

### Layout Shell
- Global layout with header (view selector + search), main canvas, persistent detail panel dock, simulator tray.
- Desktop-first breakpoint; code-split per view.

### View Implementations
- **View 2: Geological (first)** — SVG layers with behavior pills; click opens detail panel; fault line overlays for key tensions.
- **Detail Panel** — Reusable concept card with summary, quotes, examples, related chips; driven by selected concept ID.
- **View 1: Gravitational** — Positioned SVG: Anthropic center, operators/users orbit, draggable Claude marker; toggle “No system prompt”; hover/click to detail.
- **View 3: Mechanical** — Flowchart nodes, balance scale, bright-line gate, newspaper tiles; cross-highlighting with other views.
- Cross-view linking via shared concept IDs; pulsing highlights and search overlay.

### Query Simulator
- Input + context modifiers (operator role, user claims) + preset scenarios.
- Client-side bright-line phrase gate (decline without API call when tripped).
- API route calling OpenAI to generate concise “processed result” summary; animate traversal steps.

### Deployment & Docs
- Vercel config with env; README covering setup, data update flow from gist, and simulator usage.
- Performance: memoize heavy SVG, lazy-load views; respect `prefers-reduced-motion` minimally.
