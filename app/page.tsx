"use client";

import { Header } from "@/components/header";
import { DetailPanel } from "@/components/detail-panel";
import { GeologicalView } from "@/components/geological-view";
import { GravitationalView } from "@/components/gravitational-view";
import { MechanicalView } from "@/components/mechanical-view";
import { QuerySimulator } from "@/components/query-simulator";
import { useSelectionStore } from "@/lib/state";

function ActiveView() {
  const activeView = useSelectionStore((s) => s.activeView);

  if (activeView === "gravitational") return <GravitationalView />;
  if (activeView === "mechanical") return <MechanicalView />;
  return <GeologicalView />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 py-8">
        <Header />
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <ActiveView />
          </div>
          <DetailPanel />
        </div>
        <QuerySimulator />
      </div>
    </div>
  );
}
