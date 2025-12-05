"use client";

import { concepts } from "@/content/concepts";
import { useSelectionStore } from "@/lib/state";

type LayerKey = "inner-core" | "outer-core" | "mantle" | "crust" | "surface";

const layerOrder: LayerKey[] = [
  "surface",
  "crust",
  "mantle",
  "outer-core",
  "inner-core",
];

const layerLabels: Record<LayerKey, string> = {
  "inner-core": "Inner Core · Hardcoded OFF",
  "outer-core": "Outer Core · Hardcoded ON",
  mantle: "Mantle · Softcoded Non-Default",
  crust: "Crust · Softcoded Default",
  surface: "Surface · Contextual",
};

export function GeologicalView() {
  const selectConcept = useSelectionStore((s) => s.selectConcept);
  const geologicalConcepts = concepts.filter((c) => c.view === "geological");

  const grouped = layerOrder.map((layer) => ({
    layer,
    items: geologicalConcepts.filter((c) => c.visualPosition?.layer === layer),
  }));

  return (
    <div className="h-full rounded-lg border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4 shadow-sm">
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">View 2</p>
          <h3 className="text-lg font-semibold">Geological cross-section</h3>
          <p className="text-sm text-slate-600">
            Behavior strata and unlockable layers.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {grouped.map(({ layer, items }) => (
          <div
            key={layer}
            className="rounded-md border border-slate-200 bg-white/90 px-3 py-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">
                {layerLabels[layer]}
              </p>
              <p className="text-xs text-slate-500">{items.length} items</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.length ? (
                items.map((concept) => (
                  <button
                    key={concept.id}
                    onClick={() => selectConcept(concept.id)}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow"
                  >
                    {concept.name}
                  </button>
                ))
              ) : (
                <p className="text-xs text-slate-500">No items yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
