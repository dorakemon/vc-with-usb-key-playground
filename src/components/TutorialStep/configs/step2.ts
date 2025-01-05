import { SceneConfig } from "./types";

export type SceneKey1 =
  | "nonceFromIssuer"
  | "nonceFromBrowser"
  | "nonceInDevice";

export const scene1Flow: Record<SceneKey1, SceneConfig<SceneKey1>> = {
  nonceFromIssuer: {
    from: 2,
    to: 1,
    activeIndexes: [2],
    waitIndexes: [],
    messages: [[], ["NONCE"]],
    next: "nonceFromBrowser",
  },
  nonceFromBrowser: {
    from: 1,
    to: 0,
    activeIndexes: [1],
    waitIndexes: [],
    messages: [["NONCE"], ["NONCE"]],
    next: "nonceInDevice",
  },
  nonceInDevice: {
    from: 0,
    to: 0,
    activeIndexes: [0],
    waitIndexes: [0],
    messages: [["NONCE"], ["NONCE"]],
  },
};
