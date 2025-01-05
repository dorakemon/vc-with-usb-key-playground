import { AnimatedSVGLayout } from "./AnimatedSVG";
import { scene1Flow } from "./configs/step2";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

export const Step2 = () => {
  const { sceneKey, currentScene, toNextScene } = useSceneFlow(
    scene1Flow,
    "nonceFromIssuer",
  );

  const { from, to, activeIndexes, waitIndexes, messages } = currentScene;

  const handleSceneChange = () => {
    toNextScene();
  };

  return (
    <AnimatedSVGLayout
      isAnimating={true}
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
