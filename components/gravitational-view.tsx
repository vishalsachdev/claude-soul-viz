"use client";

import { concepts } from "@/content/concepts";
import { useSelectionStore } from "@/lib/state";

export function GravitationalView() {
  const selectConcept = useSelectionStore((s) => s.selectConcept);
  const nodes = concepts.filter((c) => c.view === "gravitational");

  return (
    <div className="h-full rounded-lg border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4 shadow-sm">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">View 1</p>
          <h3 className="text-lg font-semibold">Gravitational field</h3>
          <p className="text-sm text-slate-600">
            Principals and trust gradients (desktop-first).
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
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
