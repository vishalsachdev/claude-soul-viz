"use client";

import { concepts } from "@/content/concepts";
import { useSelectionStore } from "@/lib/state";

export function DetailPanel() {
  const selectedConceptId = useSelectionStore((s) => s.selectedConceptId);
  const selectConcept = useSelectionStore((s) => s.selectConcept);
  const concept = concepts.find((c) => c.id === selectedConceptId);

  if (!concept) {
    return (
      <aside className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Detail Panel</h2>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          Select any element in a view to see quotes, examples, and linkages.
        </p>
      </aside>
    );
  }

  return (
    <aside className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {concept.category}
          </p>
          <h2 className="text-lg font-semibold">{concept.name}</h2>
        </div>
        <button
          type="button"
          onClick={() => selectConcept(null)}
          className="text-sm text-slate-500 underline underline-offset-4 hover:text-slate-800"
        >
          Clear
        </button>
      </div>

      <p className="mt-3 text-sm text-slate-700">{concept.summary}</p>

      {concept.soulDocQuotes?.length ? (
        <div className="mt-4 space-y-2 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
          <p className="text-xs font-semibold text-slate-500">From the soul doc</p>
          {concept.soulDocQuotes.map((quote, idx) => (
            <div key={idx} className="space-y-1 rounded border border-slate-200 bg-white p-2">
              <p className="leading-relaxed">&ldquo;{quote.text}&rdquo;</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Section: {quote.section}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {concept.examples?.length ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Examples
          </p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {concept.examples.map((ex, idx) => (
              <li key={idx} className="rounded border border-slate-200 bg-white p-2">
                <p className="font-medium">{ex.scenario}</p>
                <p className="text-slate-600">{ex.outcome}</p>
                <p className="text-slate-500">{ex.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {concept.relatedConcepts?.length ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Related
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {concept.relatedConcepts.map((id) => {
              const related = concepts.find((c) => c.id === id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => useSelectionStore.getState().selectConcept(id)}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
                >
                  {related?.name ?? id}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </aside>
  );
}
