import { useHolderStore } from "@/stores/holder";
import { useIssuerStore } from "@/stores/issuer";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { Textarea } from "../UI/textarea";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { Scene3Config } from "./configs/step3";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

export const Step3 = () => {
  const { vcDraft } = useIssuerStore();
  const { commitment, proofOfCommitment } = useHolderStore();

  const { sceneKey, currentScene, toNextScene } = useSceneFlow(
    Scene3Config,
    "commitFromDevice",
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
        <div className="space-y-2">
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
          <div className="space-y-2">
            <Label htmlFor="vcdraft">VC Draft</Label>
            <Textarea
              id="vcdraft"
              value={JSON.stringify(JSON.parse(vcDraft), null, 4)}
              className="w-full"
              rows={10}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
};
