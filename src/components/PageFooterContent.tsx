import { PropsWithChildren } from "react";

export const PageFooterContent = ({ children }: PropsWithChildren<{}>) => (
  <div className="todo-page-footer__content">{children}</div>
);
