import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
type Props = HTMLAttributes<HTMLDivElement>;

export const FormField = ({ className, children, ...restProps }: PropsWithChildren<Props>) => (
  <div {...restProps} className={clsx("utrecht-form-field utrecht-form-field--distanced", className)}>
    {children}
  </div>
);
