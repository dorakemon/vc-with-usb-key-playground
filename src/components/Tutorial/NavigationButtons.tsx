"use client";

interface NavigationButtonsProps {
  currentStep: number;
  allStepLength: number;
  nextStep: () => void;
  prevStep: () => void;
}

export const NavigationButtons = ({
  currentStep,
  allStepLength,
  nextStep,
  prevStep,
}: NavigationButtonsProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-3xl mx-auto flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`
            px-4 py-2 rounded-md
            transition-all duration-200
            ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-lab-blue-500 text-white hover:bg-lab-blue-700"
            }
          `}
          type="button"
        >
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === allStepLength - 1}
          className={`
            px-4 py-2 rounded-md
            transition-all duration-200
            ${
              currentStep === allStepLength - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-lab-blue-500 text-white hover:bg-lab-blue-700"
            }
          `}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};
