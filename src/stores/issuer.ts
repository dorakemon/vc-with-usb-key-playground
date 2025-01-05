import { nanoid } from "nanoid";
import { create } from "zustand";

type State = {
  issueNonce: string;
};

type Action = {
  setIssueNonce: (nonce: string) => void;
};

export const useIssuerStore = create<State & Action>()((set) => ({
  issueNonce: nanoid(),
  setIssueNonce: (nonce) => set({ issueNonce: nonce }),
}));
