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
    <div className="fixed right-0 bottom-0 left-0 border-gray-200 border-t bg-white p-4">
      <div className="mx-auto flex max-w-3xl justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`rounded-md px-4 py-2 transition-all duration-200 ${
            currentStep === 0
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
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
          className={`rounded-md px-4 py-2 transition-all duration-200 ${
            currentStep === allStepLength - 1
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
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
