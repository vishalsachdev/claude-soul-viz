"use client";

import { useSelectionStore } from "@/lib/state";
import { ViewId } from "@/content/types";

const views: { id: ViewId; label: string; description: string }[] = [
  {
    id: "gravitational",
    label: "WHO — Gravitational",
    description: "Principals and trust gradients",
  },
  {
    id: "geological",
    label: "WHAT — Geological",
    description: "Behavior strata and unlocks",
  },
  {
    id: "mechanical",
    label: "HOW — Mechanical",
    description: "Decision machine and weighing",
  },
];

export function Header() {
  const activeView = useSelectionStore((s) => s.activeView);
  const setActiveView = useSelectionStore((s) => s.setActiveView);

  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          The Architecture of a Soul
        </h1>
        <p className="text-sm text-slate-600">
          Interactive Claude Soul visualization · Desktop-first MVP
        </p>
      </div>
      <nav className="flex items-center gap-2">
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            onClick={() => setActiveView(view.id)}
            className={`rounded-md border px-3 py-2 text-sm transition hover:border-slate-400 hover:text-slate-900 ${
              activeView === view.id
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 text-slate-700"
            }`}
            title={view.description}
          >
            {view.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
