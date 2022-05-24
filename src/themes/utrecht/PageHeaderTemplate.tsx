import { PropsWithChildren } from "react";

export const UtrechtPageHeaderTemplate = ({ children }: PropsWithChildren<{}>) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <utrecht-logo></utrecht-logo>
    <div style={{ display: "flex", gap: "2em", marginInlineEnd: "2em", alignItems: "last baseline" }}>{children}</div>
  </div>
);
