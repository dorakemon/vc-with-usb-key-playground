import { AnimatedSVGLayout } from "./AnimatedSVG";
import { Scene2Config } from "./configs/step2";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

export const Step2 = () => {
  const { currentScene, toNextScene, isAnimating } = useSceneFlow(
    Scene2Config,
    "nonceFromIssuer",
  );

  const { from, to, activeIndexes, waitIndexes, messages } = currentScene;

  const handleSceneChange = () => {
    toNextScene();
  };

  return (
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
  );
};
