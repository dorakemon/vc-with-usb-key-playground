import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { useStep } from "@/hooks/useStep";
import { useIssuerStore } from "@/stores/issuer";
import React from "react";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { StepButton } from "./components/StepButton";
import { VC_ENTITIES } from "./entities";

const CURRENT_STEP = 1;

export const Step1 = () => {
  const { currentStep, nextStep } = useStep();
  const { issueNonce, setIssueNonce } = useIssuerStore();

  const isPastStep = currentStep >= CURRENT_STEP;

  const handleNonceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueNonce(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div
        className={`mt-2 rounded-lg bg-white p-4 text-gray-600 shadow-sm ${isPastStep ? "bg-opacity-30" : ""}`}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nonce">Nonce</Label>
            <Input
              id="nonce"
              value={issueNonce}
              onChange={handleNonceChange}
              placeholder="Enter nonce value"
              className="w-full"
            />
          </div>
        </div>
        <AnimatedSVGLayout
          isAnimating={false}
          onAnimationComplete={() => {}}
          entities={VC_ENTITIES}
          startIndex={0}
          endIndex={0}
          className="w-full"
          activeIndexes={[0]}
          messages={[["NONCE"], []]}
        />
      </div>
      <StepButton disabled={isPastStep} onClick={nextStep}>
        Send Nonce
      </StepButton>
    </div>
  );
};
