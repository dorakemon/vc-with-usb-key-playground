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
  const isPastStep = stepNumber - 1 < currentStep;

  return (
    <div className={`relative ${isPastStep ? "opacity-50" : ""}`}>
      <div className="flex">
        <div className="relative">
          <div
            className={`z-10 flex h-8 w-8 transform items-center justify-center rounded-full transition-all duration-500 ${
              isPastStep
                ? "bg-green-500 text-white"
                : stepNumber - 1 === currentStep
                  ? "bg-lab-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
            }
              ${visibleItem ? "scale-110 ring-pulse-animation" : "scale-100"}
            `}
          >
            {isPastStep ? <Check className="h-4 w-4" /> : stepNumber}
          </div>
        </div>

        <div className="ml-4 flex-1">
          <h3
            className={`font-medium text-lg transition-colors duration-500 ${
              isPastStep
                ? "text-green-500"
                : stepNumber - 1 === currentStep
                  ? "text-lab-blue-600"
                  : "text-gray-500"
            }`}
          >
            {step.title}
          </h3>
          {step.description && (
            <p className="mt-1 text-gray-500 text-sm">{step.description}</p>
          )}

          {visibleItem && step.content}
        </div>
      </div>

      {stepNumber - 1 <= currentStep && (
        <div
          className="absolute top-8 left-4 w-px bg-lab-blue-500 transition-all duration-500"
          style={{ height: visibleItem ? "100%" : "100%" }}
        />
      )}
    </div>
  );
};
