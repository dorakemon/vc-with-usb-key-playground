import { BrowserIcon } from "@/components/Icons";
import { BaseEntity } from "./BaseEntity";

export type Props = {
  active?: boolean;
};

export const BrowserEntity = ({ active = false }: Props) => (
  <BaseEntity
    icon={
      <BrowserIcon
        className={`h-full w-full ${active && "fill-lab-pink-500"}`}
      />
    }
    title="Browser"
    active={active}
  />
);
