import sampleVC from "@/example/sampleVC.json";
import { nanoid } from "nanoid";
import { create } from "zustand";

type State = {
  issueId: string;
  commitment: string;
  proofOfCommitment: string;
  vc: string;
};

type Action = {
  receiveCommitment: (data: {
    issueId: string;
    commitment: string;
    proofOfCommitment: string;
  }) => void;
  receiveVC: (data: { vc: string }) => void;
};

export const useHolderStore = create<State & Action>()((set) => ({
  // FIXME: This should be inputted by the device
  issueId: nanoid(),
  // FIXME: This should be inputted by the device
  commitment: nanoid(),
  // FIXME: This should be inputted by the device
  proofOfCommitment: nanoid(),
  // FIXME: This should be inputted by the device
  vc: JSON.stringify(sampleVC),
  receiveCommitment: (state) => set({ ...state }),
  receiveVC: (state) => set({ ...state }),
}));
