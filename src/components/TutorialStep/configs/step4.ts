import { SceneConfig } from "./types";

export type Scene4Key = "vcFromIssuer" | "vcInBrowser";

export const Scene4Config: Record<Scene4Key, SceneConfig<Scene4Key>> = {
  vcFromIssuer: {
    from: 2,
    to: 1,
    activeIndexes: [2],
    waitIndexes: [],
    messages: [[], ["VC"]],
    next: "vcInBrowser",
  },
  vcInBrowser: {
    from: 1,
    to: 1,
    activeIndexes: [1],
    waitIndexes: [],
    messages: [[], ["VC"]],
  },
};
