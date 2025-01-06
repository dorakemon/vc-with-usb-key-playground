import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { useIssuerStore } from "@/stores/issuer";
import React from "react";
import { AnimatedSVGLayout } from "./AnimatedSVG";
import { VC_ENTITIES } from "./entities";

export const Step1 = () => {
  const { issueNonce, setIssueNonce } = useIssuerStore();

  const handleNonceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueNonce(e.target.value);
  };

  return (
    <div>
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
  );
};
