import { BrowserIcon } from "@/components/Icons";
import { BaseEntity } from "./BaseEntity";

export const BrowserEntity = () => (
  <BaseEntity
    icon={<BrowserIcon width="100%" height="100%" />}
    title="Browser"
  />
);
