import { useMemo, useState } from "react";

import { AnimatedSVGLayout } from "./AnimatedSVG";
import { VC_ENTITIES } from "./entities";

export const Step2 = () => {
  const SCENE = [
    "nonceFromIssuer",
    "nonceFromBrowser",
    "nonceInDevice",
  ] as const;
  const [scene, setScene] = useState<(typeof SCENE)[number] | null>(
    "nonceFromIssuer",
  );
  const isFirstScene = scene === SCENE[0];
  const isLastScene = scene === SCENE[SCENE.length - 1];

  const handleSceneChange = () => {
    if (scene === null) {
      setScene("nonceFromIssuer");
    } else if (scene === "nonceFromIssuer") {
      setScene("nonceFromBrowser");
    } else if (scene === "nonceFromBrowser") {
      setScene("nonceInDevice");
    } else if (scene === "nonceInDevice") {
      setScene("nonceFromIssuer");
    }
  };

  const { from, to, activeIndexes } = useMemo(() => {
    if (scene === "nonceFromIssuer") {
      return { from: 2, to: 1, activeIndexes: [] };
    }
    if (scene === "nonceFromBrowser") {
      return { from: 1, to: 0, activeIndexes: [] };
    }
    if (scene === "nonceInDevice") {
      return { from: 0, to: 0, activeIndexes: [0] };
    }
    return { from: 0, to: 0, activeIndexes: [] };
  }, [scene]);

  /* <div className="w-full flex justify-center mt-8">
    <button
      onClick={handleSceneChange}
      disabled={!isFirstScene && !isLastScene}
      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      type="button"
    >
      アニメーション開始
    </button>
  </div> */
  return (
    <AnimatedSVGLayout
      isAnimating={scene !== null || !isLastScene}
      onAnimationComplete={handleSceneChange}
      entities={VC_ENTITIES}
      startIndex={from} // Square から
      endIndex={to} // Circle へ
      className="w-full"
      activeIndexes={activeIndexes}
    />
  );
};
