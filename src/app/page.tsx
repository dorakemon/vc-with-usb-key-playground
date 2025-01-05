"use client";

import { NavigationButtons } from "@/components/Tutorial/NavigationButtons";
import { Tutorial } from "@/components/Tutorial/Tutorial";
import { SECTIONS } from "@/components/TutorialStep";
import { useState } from "react";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const allSteps = SECTIONS.flatMap((section) => section.steps);

  const nextStep = () => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-4xl px-4 py-8 pb-24">
        <Tutorial currentStep={currentStep} sections={SECTIONS} />
        <NavigationButtons
          currentStep={currentStep}
          allStepLength={allSteps.length}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </main>
  );
}
