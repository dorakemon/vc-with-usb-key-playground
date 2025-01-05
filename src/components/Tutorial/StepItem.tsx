import { Check } from "lucide-react";

interface Step {
  title: string;
  description?: string;
  content?: React.ReactNode;
}

interface StepItemProps {
  step: Step;
  stepNumber: number;
  currentStep: number;
  visibleItem: boolean;
}

export const StepItem = ({
  step,
  stepNumber,
  currentStep,
  visibleItem,
}: StepItemProps) => {
  return (
    <div className="relative">
      <div className="flex">
        <div className="relative">
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center
              transition-all duration-500 transform z-10
              ${
                stepNumber - 1 < currentStep
                  ? "bg-green-500 text-white"
                  : stepNumber - 1 === currentStep
                    ? "bg-lab-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
              }
              ${visibleItem ? "scale-110 ring-pulse-animation" : "scale-100"}
            `}
          >
            {stepNumber - 1 < currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              stepNumber
            )}
          </div>
        </div>

        <div className="ml-4 flex-1">
          <h3
            className={`font-medium text-lg transition-colors duration-500 
              ${
                stepNumber - 1 < currentStep
                  ? "text-green-500"
                  : stepNumber - 1 === currentStep
                    ? "text-lab-blue-600"
                    : "text-gray-500"
              }`}
          >
            {step.title}
          </h3>
          {step.description && (
            <p className="text-sm text-gray-500 mt-1">{step.description}</p>
          )}

          {visibleItem && (
            <div className="mt-2 text-gray-600 bg-white rounded-lg p-4 shadow-sm">
              {step.content}
            </div>
          )}
        </div>
      </div>

      {stepNumber - 1 <= currentStep && (
        <div
          className="absolute left-4 top-8 w-px bg-lab-blue-500 transition-all duration-500"
          style={{ height: visibleItem ? "100%" : "100%" }}
        />
      )}
    </div>
  );
};
