import { PropsWithChildren } from "react";

export const PageFooterTemplate = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

export const PageHeaderTemplate = ({ children }: PropsWithChildren<{}>) => (
  <div
    style={{
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
    }}
  >
    {children}
  </div>
);
