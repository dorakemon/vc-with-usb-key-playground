import { CardContent } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { useIssuerStore } from "@/stores/issuer";
import React from "react";

export const Step1 = () => {
  const { issueNonce, setIssueNonce } = useIssuerStore();

  const handleNonceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueNonce(e.target.value);
  };

  return (
    <CardContent>
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
    </CardContent>
  );
};
