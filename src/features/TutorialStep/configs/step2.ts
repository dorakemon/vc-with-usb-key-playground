import { SceneConfig } from "./types";

export type Scene2Key =
  | "nonceFromIssuer"
  | "nonceFromBrowser"
  | "nonceInDevice";

export const Scene2Config: Record<Scene2Key, SceneConfig<Scene2Key>> = {
  nonceFromIssuer: {
    from: 0,
    to: 1,
    activeIndexes: [0],
    waitIndexes: [],
    messages: [["NONCE"], []],
    next: "nonceFromBrowser",
  },
  nonceFromBrowser: {
    from: 1,
    to: 2,
    activeIndexes: [1],
    waitIndexes: [],
    messages: [["NONCE"], ["NONCE"]],
    next: "nonceInDevice",
  },
  nonceInDevice: {
    from: 2,
    to: 2,
    activeIndexes: [2],
    waitIndexes: [2],
    messages: [["NONCE"], ["NONCE"]],
  },
};
