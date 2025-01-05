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

  const { from, to, activeIndexes, messages } = useMemo(() => {
    if (scene === "nonceFromIssuer") {
      return {
        from: 2,
        to: 1,
        activeIndexes: [],
        messages: [[], ["NONCE"]],
      };
    }
    if (scene === "nonceFromBrowser") {
      return {
        from: 1,
        to: 0,
        activeIndexes: [],
        messages: [["NONCE"], ["NONCE"]],
      };
    }
    if (scene === "nonceInDevice") {
      return {
        from: 0,
        to: 0,
        activeIndexes: [0],
        messages: [["NONCE"], ["NONCE"]],
      };
    }
    return { from: 0, to: 0, activeIndexes: [], messages: [] };
  }, [scene]);

  return (
    <AnimatedSVGLayout
      isAnimating={scene !== null || !isLastScene}
      onAnimationComplete={handleSceneChange}
      entities={VC_ENTITIES}
      startIndex={from}
      endIndex={to}
      className="w-full"
      activeIndexes={activeIndexes}
      messages={messages}
    />
  );
};
