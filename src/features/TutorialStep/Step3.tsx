import { useStep } from "@/hooks/useStep";
import { useHolderStore } from "@/stores/holder";
import { useIssuerStore } from "@/stores/issuer";
import { Input } from "../../components/UI/input";
import { Label } from "../../components/UI/label";
import { Textarea } from "../../components/UI/textarea";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { StepButton } from "./components/StepButton";
import { Scene3Config } from "./configs/step3";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

const CURRENT_STEP = 3;

export const Step3 = () => {
  const { currentStep, nextStep } = useStep();
  const isPastStep = currentStep >= CURRENT_STEP;
  const { vcDraft } = useIssuerStore();
  const { commitment, proofOfCommitment } = useHolderStore();

  const { sceneKey, currentScene, toNextScene, isAnimating } = useSceneFlow(
    Scene3Config,
    "commitFromDevice",
  );

  const { from, to, activeIndexes, waitIndexes, messages } = currentScene;

  const handleSceneChange = () => {
    toNextScene();
  };

  return (
    <div className="space-y-4">
      <div
        className={`mt-2 rounded-lg bg-white p-4 text-gray-600 shadow-sm ${isPastStep ? "bg-opacity-30" : ""}`}
      >
        <div className="space-y-4">
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
      </div>
      {sceneKey === "commitInIssuer" && (
        <StepButton disabled={isPastStep} onClick={nextStep}>
          Issue VC
        </StepButton>
      )}
    </div>
  );
};
