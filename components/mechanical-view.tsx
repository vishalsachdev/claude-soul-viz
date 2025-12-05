"use client";

import { concepts } from "@/content/concepts";
import { useSelectionStore } from "@/lib/state";

export function MechanicalView() {
  const selectConcept = useSelectionStore((s) => s.selectConcept);
  const nodes = concepts.filter((c) => c.view === "mechanical");

  return (
    <div className="h-full rounded-lg border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">View 3</p>
          <h3 className="text-lg font-semibold">Decision machine</h3>
          <p className="text-sm text-slate-600">
            Flow of a query through weighing and bright lines.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {nodes.map((concept) => (
          <button
            key={concept.id}
            onClick={() => selectConcept(concept.id)}
            className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-white/80 p-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-wide text-slate-500">
              {concept.category}
            </p>
            <p className="text-sm font-semibold text-slate-900">{concept.name}</p>
            <p className="text-xs text-slate-600">{concept.summary}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
