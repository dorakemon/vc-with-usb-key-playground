import { SceneConfig } from "./types";

export type Scene3Key =
  | "commitFromDevice"
  | "commitFromBrowser"
  | "commitInIssuer";

export const Scene3Config: Record<Scene3Key, SceneConfig<Scene3Key>> = {
  commitFromDevice: {
    from: 2,
    to: 1,
    activeIndexes: [2],
    waitIndexes: [],
    messages: [[], ["ISSUE_ID", "COMMITMENT", "PROOF_OF_COMMITMENT"]],
    next: "commitFromBrowser",
  },
  commitFromBrowser: {
    from: 1,
    to: 0,
    activeIndexes: [1],
    waitIndexes: [],
    messages: [
      ["COMMITMENT", "PROOF_OF_COMMITMENT"],
      ["ISSUE_ID", "COMMITMENT", "PROOF_OF_COMMITMENT"],
    ],
    next: "commitInIssuer",
  },
  commitInIssuer: {
    from: 1,
    to: 0,
    activeIndexes: [0],
    waitIndexes: [],
    messages: [
      ["COMMITMENT", "PROOF_OF_COMMITMENT"],
      ["ISSUE_ID", "COMMITMENT", "PROOF_OF_COMMITMENT"],
    ],
  },
};
