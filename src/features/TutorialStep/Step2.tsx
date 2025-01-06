import { useStep } from "@/hooks/useStep";
import { useEffect, useRef } from "react";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { Scene2Config } from "./configs/step2";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

const CURRENT_STEP = 2;

export const Step2 = () => {
  const { currentStep, nextStep } = useStep();
  const isPastStep = currentStep >= CURRENT_STEP;
  const { currentScene, toNextScene, isAnimating } = useSceneFlow(
    Scene2Config,
    "nonceFromIssuer",
  );

  const { from, to, activeIndexes, waitIndexes, messages } = currentScene;

  const handleSceneChange = () => {
    toNextScene();
  };

  // FIXME: Delete after implementing the device functions
  const didInit = useRef(false);
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setTimeout(() => {
      if (didInit.current) return;
      didInit.current = true;
      nextStep();
      clearTimeout(timer);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mt-2 rounded-lg bg-white p-4 text-gray-600 shadow-sm ${isPastStep ? "bg-opacity-30" : ""}`}
    >
      <AnimatedSVGLayout
        isAnimating={isAnimating}
        onAnimationComplete={handleSceneChange}
        entities={VC_ENTITIES}
        startIndex={from}
        endIndex={to}
        className="w-full"
        activeIndexes={activeIndexes}
        waitIndexes={waitIndexes}
        messages={messages}
      />
    </div>
  );
};
