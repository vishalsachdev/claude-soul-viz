"use client";

import { useState } from "react";
import { simulationPresets } from "@/content/concepts";
import { SimulationResult } from "@/content/types";
import { useSimulatorStore } from "@/lib/state";

const brightLinePatterns = [
  /csam/i,
  /child sexual/i,
  /wmd/i,
  /mustard gas/i,
  /vx nerve/i,
  /explosive synthesis/i,
  /pipe bomb/i,
];

export function QuerySimulator() {
  const {
    simulationInput,
    setSimulationInput,
    simulationResult,
    setSimulationResult,
    isSimulating,
    setIsSimulating,
  } = useSimulatorStore();
  const [error, setError] = useState<string | null>(null);

  const handlePreset = (id: string) => {
    const preset = simulationPresets.find((p) => p.id === id);
    if (!preset) return;
    setSimulationInput({
      query: preset.query,
      operatorContext: preset.operatorContext ?? null,
      userClaims: preset.userClaims ?? [],
    });
    setSimulationResult(null);
  };

  const simulate = async () => {
    if (!simulationInput.query.trim()) {
      setError("Enter a query to simulate.");
      return;
    }
    setError(null);
    setIsSimulating(true);

    const trip = brightLinePatterns.some((pattern) =>
      pattern.test(simulationInput.query)
    );

    if (trip) {
      const decline: SimulationResult = {
        responseType: "declined",
        keyFactors: [{ label: "Bright line triggered", verdict: "negative" }],
        populationBreakdown: [
          { intent: "malicious", percentage: 70 },
          { intent: "benign", percentage: 30 },
        ],
        balanceWeights: [],
        brightLineTriggered: true,
        whatWouldChange: [
          "Rephrase to high-level safety guidance only",
          "Remove explicit synthesis or harmful instructions",
        ],
      };
      setSimulationResult(decline);
      setIsSimulating(false);
      return;
    }

    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(simulationInput),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        setError(payload.error ?? "Simulation failed");
        setIsSimulating(false);
        return;
      }

      const data = await res.json();
      setSimulationResult(data.result as SimulationResult);
    } catch (e) {
      setError("Network or server error while simulating.");
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <section className="mt-8 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Query Simulator
          </p>
          <h3 className="text-lg font-semibold">Send a message through the system</h3>
        </div>
        {isSimulating ? (
          <span className="text-sm text-amber-600">Simulating…</span>
        ) : null}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <textarea
            className="h-28 w-full rounded-md border border-slate-300 bg-slate-50 p-3 text-sm shadow-inner focus:border-slate-500 focus:outline-none"
            placeholder="Type a message to see how it would be processed..."
            value={simulationInput.query}
            onChange={(e) => setSimulationInput({ query: e.target.value })}
          />
          <div className="mt-2 flex gap-2 text-xs text-slate-600">
            <label className="flex items-center gap-1">
              Operator:
              <select
                className="rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                value={simulationInput.operatorContext ?? ""}
                onChange={(e) =>
                  setSimulationInput({
                    operatorContext: e.target.value || null,
                  })
                }
              >
                <option value="">None</option>
                <option value="Medical">Medical</option>
                <option value="Coding">Coding</option>
                <option value="Education">Education</option>
                <option value="Adult content">Adult content</option>
              </select>
            </label>
            <label className="flex items-center gap-1">
              User claims:
              <input
                className="w-48 rounded border border-slate-300 bg-white px-2 py-1 text-xs"
                placeholder="Comma-separated (e.g., Adult consent, Researcher)"
                value={simulationInput.userClaims.join(", ")}
                onChange={(e) =>
                  setSimulationInput({
                    userClaims: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Presets
          </p>
          <div className="flex flex-col gap-2">
            {simulationPresets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePreset(preset.id)}
                className="rounded border border-slate-300 bg-slate-50 px-2 py-1 text-left text-xs text-slate-700 transition hover:border-slate-500"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={simulate}
          disabled={isSimulating}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          Simulate
        </button>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>

      {simulationResult ? (
        <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Simulation result
            </p>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              {simulationResult.responseType}
            </span>
          </div>
          {simulationResult.modelUsed ? (
            <p className="text-xs text-slate-500">
              Model: {simulationResult.modelUsed}
            </p>
          ) : null}
          <div className="mt-2 grid grid-cols-3 gap-3">
            <div>
              <p className="text-xs font-semibold text-slate-600">Key factors</p>
              <ul className="mt-1 space-y-1">
                {simulationResult.keyFactors.map((factor, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        factor.verdict === "positive"
                          ? "bg-emerald-500"
                          : factor.verdict === "negative"
                            ? "bg-amber-500"
                            : "bg-slate-400"
                      }`}
                    />
                    {factor.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Population</p>
              <ul className="mt-1 space-y-1">
                {simulationResult.populationBreakdown.map((entry, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{entry.intent}</span>
                    <span className="text-slate-500">{entry.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">What shifts outcome</p>
              <ul className="mt-1 space-y-1">
                {simulationResult.whatWouldChange.map((item, idx) => (
                  <li key={idx} className="text-slate-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {simulationResult.openAIResponse ? (
            <div className="mt-3 rounded border border-slate-200 bg-white p-2">
              <p className="text-xs font-semibold text-slate-600">OpenAI summary</p>
              <p className="text-sm text-slate-800">
                {simulationResult.openAIResponse}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
