import { AuthenticatorEntity } from "./AuthenticatorEntity";
import { BrowserEntity } from "./BrowserEntity";
import { ServerEntity } from "./ServerEntity";

export const VC_ENTITIES = [
  (active: boolean) => <ServerEntity key="0" active={active} />,
  (active: boolean) => <BrowserEntity key="1" active={active} />,
  (active: boolean) => <AuthenticatorEntity key="2" active={active} />,
];
