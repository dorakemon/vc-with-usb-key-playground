import sampleVCDraft from "@/example/sampleVCDraft.json";
import { nanoid } from "nanoid";
import { create } from "zustand";

type State = {
  issueNonce: string;
  vcDraft: string;
};

type Action = {
  setIssueNonce: (nonce: string) => void;
  setVCDraft: (vcDraft: string) => void;
};

export const useIssuerStore = create<State & Action>()((set) => ({
  issueNonce: nanoid(),
  setIssueNonce: (nonce) => set({ issueNonce: nonce }),
  vcDraft: JSON.stringify(sampleVCDraft),
  setVCDraft: (vcDraft) => set({ vcDraft }),
}));
