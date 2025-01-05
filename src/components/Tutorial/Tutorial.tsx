import { SECTIONS } from "@/components/TutorialStep";
import { useEffect, useRef } from "react";
import { StepItem } from "./StepItem";

interface TutorialProps {
  currentStep: number;
  sections: typeof SECTIONS;
}

export const Tutorial = ({ currentStep, sections }: TutorialProps) => {
  let globalStepCount = 0;
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const targetStep = stepRefs.current[currentStep];
    if (targetStep && currentStep > 0) {
      targetStep.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentStep]);

  return (
    <div className="space-y-12">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="mb-6 font-bold text-gray-800 text-xl">
            {section.title}
          </h2>
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute top-8 bottom-4 left-4 w-px bg-gray-200" />

            {section.steps.map((step, stepIndex) => {
              const stepNumber = globalStepCount++;
              const visibleItem = currentStep >= stepNumber;
              return (
                <div
                  key={stepIndex}
                  ref={(el) => {
                    stepRefs.current[stepNumber] = el;
                  }}
                >
                  <StepItem
                    step={step}
                    stepNumber={stepNumber + 1}
                    currentStep={currentStep}
                    visibleItem={visibleItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
