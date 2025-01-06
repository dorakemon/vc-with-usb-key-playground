import { useStep } from "@/hooks/useStep";
import { useHolderStore } from "@/stores/holder";
import { Label } from "../../components/UI/label";
import { Textarea } from "../../components/UI/textarea";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { Scene4Config } from "./configs/step4";
import { useSceneFlow } from "./configs/useSceneFlow";
import { VC_ENTITIES } from "./entities";

const CURRENT_STEP = 4;

export const Step4 = () => {
  const { currentStep, nextStep } = useStep();
  const isPastStep = currentStep >= CURRENT_STEP;
  const { vc } = useHolderStore();

  const { sceneKey, currentScene, toNextScene, isAnimating } = useSceneFlow(
    Scene4Config,
    "vcFromIssuer",
  );

  const { from, to, activeIndexes, waitIndexes, messages } = currentScene;

  const handleSceneChange = () => {
    toNextScene();
  };

  return (
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
        <div className="space-y-2">
          <Label htmlFor="vc">VC</Label>
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
