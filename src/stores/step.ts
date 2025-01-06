import { create } from "zustand";

type State = {
  currentStep: number;
  allStepLength: number;
};

type Action = {
  setCurrentStep: (step: number) => void;
};

export const useStepStore = create<State & Action>()((set) => ({
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
  allStepLength: 8,
}));
