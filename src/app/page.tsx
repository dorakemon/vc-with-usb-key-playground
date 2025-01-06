"use client";

import { Tutorial } from "@/features/Tutorial";
import { SECTIONS } from "@/features/TutorialStep";
import { useStep } from "@/hooks/useStep";

export default function Page() {
  const { currentStep } = useStep();

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-4xl px-4 py-8 pb-24">
        <Tutorial currentStep={currentStep} sections={SECTIONS} />
      </div>
    </main>
  );
}
