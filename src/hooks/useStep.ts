import { useStepStore } from "@/stores/step";

export const useStep = () => {
  const { currentStep, setCurrentStep, allStepLength } = useStepStore();

  const nextStep = () => {
    if (currentStep < allStepLength - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return { currentStep, allStepLength, nextStep, prevStep };
};
