import { SceneConfig } from "./types";

export type Scene3Key =
  | "commitFromDevice"
  | "commitFromBrowser"
  | "commitInIssuer";

export const Scene3Config: Record<Scene3Key, SceneConfig<Scene3Key>> = {
  commitFromDevice: {
    from: 0,
    to: 1,
    activeIndexes: [0],
    waitIndexes: [],
    messages: [["ISSUE_ID", "COMMITMENT", "PROOF_OF_COMMITMENT"], []],
    next: "commitFromBrowser",
  },
  commitFromBrowser: {
    from: 1,
    to: 2,
    activeIndexes: [1],
    waitIndexes: [],
    messages: [
      ["ISSUE_ID", "COMMITMENT", "PROOF_OF_COMMITMENT"],
      ["COMMITMENT", "PROOF_OF_COMMITMENT"],
    ],
    next: "commitInIssuer",
  },
  commitInIssuer: {
    from: 1,
    to: 2,
    activeIndexes: [2],
    waitIndexes: [],
    messages: [
      ["ISSUE_ID", "COMMITMENT", "PROOF_OF_COMMITMENT"],
      ["COMMITMENT", "PROOF_OF_COMMITMENT"],
    ],
  },
};
