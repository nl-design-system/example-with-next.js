import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

type Props = HTMLAttributes<HTMLLegendElement>;
export const FieldsetLegend = ({ className, children, ...restProps }: PropsWithChildren<Props>) => (
  <legend {...restProps} className={clsx("utrecht-form-fieldset__legend", className)}>
    {children}
  </legend>
);
