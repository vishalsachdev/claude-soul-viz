import { create } from "zustand";
import { SimulationInput, SimulationResult, ViewId } from "@/content/types";

interface SelectionState {
  activeView: ViewId;
  selectedConceptId: string | null;
  setActiveView: (view: ViewId) => void;
  selectConcept: (id: string | null) => void;
}

interface SimulatorState {
  simulationInput: SimulationInput;
  simulationResult: SimulationResult | null;
  isSimulating: boolean;
  setSimulationInput: (input: Partial<SimulationInput>) => void;
  setSimulationResult: (result: SimulationResult | null) => void;
  setIsSimulating: (state: boolean) => void;
}

const defaultSimulationInput: SimulationInput = {
  query: "",
  operatorContext: null,
  userClaims: [],
};

export const useSelectionStore = create<SelectionState>((set) => ({
  activeView: "geological",
  selectedConceptId: null,
  setActiveView: (view) => set({ activeView: view }),
  selectConcept: (id) => set({ selectedConceptId: id }),
}));

export const useSimulatorStore = create<SimulatorState>((set) => ({
  simulationInput: defaultSimulationInput,
  simulationResult: null,
  isSimulating: false,
  setSimulationInput: (input) =>
    set((state) => ({
      simulationInput: { ...state.simulationInput, ...input },
    })),
  setSimulationResult: (result) => set({ simulationResult: result }),
  setIsSimulating: (state) => set({ isSimulating: state }),
}));
