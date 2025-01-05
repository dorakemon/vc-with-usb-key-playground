import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export const SECTIONS = [
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
        title: "[Issuer] Issue VC",
        content: "temp",
      },
      {
        title: "[Client] Obtain VC",
        content: "temp",
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
