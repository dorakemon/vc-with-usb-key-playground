import { AuthenticatorIcon } from "@/components/Icons";
import { BaseEntity } from "./BaseEntity";

export type Props = {
  active?: boolean;
};

export const AuthenticatorEntity = ({ active = false }: Props) => (
  <BaseEntity
    icon={
      <AuthenticatorIcon
        className={`h-full w-full ${active && "fill-lab-pink-500"}`}
      />
    }
    title="Authenticator"
    active={active}
  />
);
