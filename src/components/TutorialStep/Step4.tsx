import { useHolderStore } from "@/stores/holder";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { Scene4Config } from "./configs/step4";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

export const Step4 = () => {
  const { commitment, proofOfCommitment } = useHolderStore();

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
      {sceneKey === "commitInIssuer" && (
        <div>
          <div className="space-y-2">
            <Label htmlFor="commitment">Commitment</Label>
            <Input
              id="commitment"
              value={commitment}
              className="w-full"
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="proofOfCommitment">Proof of Commitment</Label>
            <Input
              id="proofOfCommitment"
              value={proofOfCommitment}
              className="w-full"
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
};
