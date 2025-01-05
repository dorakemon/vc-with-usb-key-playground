import { SceneConfig } from "./types";

export type Scene2Key =
  | "nonceFromIssuer"
  | "nonceFromBrowser"
  | "nonceInDevice";

export const Scene2Config: Record<Scene2Key, SceneConfig<Scene2Key>> = {
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
