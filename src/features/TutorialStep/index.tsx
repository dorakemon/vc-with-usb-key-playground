import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

export const SECTIONS: {
  title: string;
  steps: { title: string; description?: string; content: React.ReactNode }[];
}[] = [
  {
    title: "Issue VC",
    steps: [
      {
        title: "[Issuer] Request Commitment",
        description:
          "Issuer chooses a NONCE and requests a commitment from the Holder",
        content: <Step1 />,
      },
      {
        title: "[Authenticator] Generate Commitment",
        description: "Generate a commitment for the Holder's Private Key",
        content: <Step2 />,
      },
      {
        title: "Send Commitment to Issuer",
        content: <Step3 />,
      },
      {
        title: "[Issuer] Issue VC",
        content: <Step4 />,
      },
    ],
  },
  {
    title: "Present VP",
    steps: [
      {
        title: "[Verifier] Request VP",
        content: "temp",
      },
      {
        title: "[Client] Choose Attributes to Present",
        content: "temp",
      },
      {
        title: "[Client & Device] Generate Proof",
        content: "temp",
      },
      {
        title: "[Verifier] Verify Proof",
        content: "temp",
      },
    ],
  },
];
