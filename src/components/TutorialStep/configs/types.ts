export interface SceneConfig<K extends string> {
  from: number;
  to: number;
  activeIndexes: number[];
  waitIndexes: number[];
  messages: string[][];
  next?: K;
}
