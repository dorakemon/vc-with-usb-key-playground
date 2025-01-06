import { SceneConfig } from "./types";

export type Scene4Key = "vcFromIssuer" | "vcInBrowser";

export const Scene4Config: Record<Scene4Key, SceneConfig<Scene4Key>> = {
  vcFromIssuer: {
    from: 0,
    to: 1,
    activeIndexes: [0],
    waitIndexes: [],
    messages: [["VC"], []],
    next: "vcInBrowser",
  },
  vcInBrowser: {
    from: 0,
    to: 1,
    activeIndexes: [1],
    waitIndexes: [],
    messages: [["VC"], []],
  },
};
