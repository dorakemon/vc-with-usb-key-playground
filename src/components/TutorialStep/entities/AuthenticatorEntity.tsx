import { AuthenticatorIcon } from "@/components/Icons";
import { BaseEntity } from "./BaseEntity";

export const AuthenticatorEntity = () => (
  <BaseEntity
    icon={<AuthenticatorIcon width="100%" height="100%" />}
    title="Authenticator"
  />
);
