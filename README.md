# Architecture of a Soul — MVP

Desktop-first visualization of the Claude Soul document with three views (gravitational, geological, mechanical) plus a query simulator that hits the OpenAI API. Mobile/accessibility work is intentionally deprioritized for this proof of concept.

## Running locally
1) Install deps: `npm install`
2) Set env: `export OPENAI_API_KEY=...` (optional `OPENAI_MODEL`, default `gpt-4o`)
3) Start dev server: `npm run dev`
4) Open `http://localhost:3000`

## Structure
- `app/page.tsx`: Shell with header, active view, detail panel, simulator
- `components/*`: View components, detail panel, header, simulator
- `content/types.ts`: Shared data types
- `content/concepts.ts`: Seeded concepts and simulator presets
- `content/soul-doc.md`: Vendored copy of the source doc (from gist)
- `app/api/simulate/route.ts`: API route with bright-line gating + OpenAI summary

## Notes
- Bright-line checks are mirrored on client/server to avoid unnecessary LLM calls.
- Views are skeletal; add richer SVG/D3 + animations next.
- To update content, edit `content/concepts.ts` or refresh `content/soul-doc.md` from the gist.
