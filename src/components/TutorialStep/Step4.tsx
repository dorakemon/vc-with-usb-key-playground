import { useHolderStore } from "@/stores/holder";
import { Label } from "../UI/label";
import { Textarea } from "../UI/textarea";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { Scene4Config } from "./configs/step4";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

export const Step4 = () => {
  const { vc } = useHolderStore();

  const { sceneKey, currentScene, toNextScene } = useSceneFlow(
    Scene4Config,
    "vcFromIssuer",
  );

  const { from, to, activeIndexes, waitIndexes, messages } = currentScene;

  const handleSceneChange = () => {
    toNextScene();
  };

  return (
    <div className="space-y-4">
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
      <div>
        <div className="space-y-2">
          <Label htmlFor="vc">Obtained VC</Label>
          <Textarea
            id="vc"
            value={JSON.stringify(JSON.parse(vc), null, 4)}
            className="w-full"
            rows={10}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
