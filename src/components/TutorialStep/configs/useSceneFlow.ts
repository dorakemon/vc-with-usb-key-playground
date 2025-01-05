import { useCallback, useState } from "react";
import { SceneConfig } from "./types";

export function useSceneFlow<T extends Record<string, SceneConfig<string>>>(
  flow: T,
  initialKey: keyof T,
) {
  const [sceneKey, setSceneKey] = useState<keyof T>(initialKey);

  const currentScene = flow[sceneKey];

  const toNextScene = useCallback(() => {
    setTimeout(() => {
      if (currentScene?.next) {
        setSceneKey(currentScene.next);
      }
    }, 700);
  }, [currentScene]);

  return {
    sceneKey,
    currentScene,
    toNextScene,
    setSceneKey,
  };
}
