import { ServerIcon } from "@/components/Icons";
import { BaseEntity } from "./BaseEntity";

export type Props = {
  active?: boolean;
};

export const ServerEntity = ({ active = false }: Props) => (
  <BaseEntity
    icon={
      <ServerIcon
        className={`w-full h-full ${active && "fill-lab-pink-500"}`}
      />
    }
    title="Issuer"
    active={active}
  />
);
