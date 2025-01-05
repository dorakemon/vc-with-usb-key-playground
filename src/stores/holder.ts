import { nanoid } from "nanoid";
import { create } from "zustand";

type State = {
  issueId: string;
  commitment: string;
  proofOfCommitment: string;
};

type Action = {
  setHolderState: (data: State) => void;
};

export const useHolderStore = create<State & Action>()((set) => ({
  // FIXME: This should be inputted by the device
  issueId: nanoid(),
  // FIXME: This should be inputted by the device
  commitment: nanoid(),
  // FIXME: This should be inputted by the device
  proofOfCommitment: nanoid(),
  setHolderState: (state) => set(state),
}));
