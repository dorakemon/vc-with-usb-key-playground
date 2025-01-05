import { SECTIONS } from "@/components/TutorialStep";
import { StepItem } from "./StepItem";

interface TutorialProps {
  currentStep: number;
  sections: typeof SECTIONS;
}

export const Tutorial = ({ currentStep, sections }: TutorialProps) => {
  let globalStepCount = 0;

  return (
    <div className="space-y-12">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {section.title}
          </h2>
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-8 bottom-4 w-px bg-gray-200" />

            {section.steps.map((step, stepIndex) => {
              const stepNumber = ++globalStepCount;
              const isCurrentStep = currentStep === stepNumber - 1;
              return (
                <StepItem
                  key={stepIndex}
                  step={step}
                  stepNumber={stepNumber}
                  currentStep={currentStep}
                  isCurrentStep={isCurrentStep}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
