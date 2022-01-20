import clsx from "clsx";
import { FieldsetHTMLAttributes, PropsWithChildren } from "react";

type Props = FieldsetHTMLAttributes<HTMLFieldSetElement>;
export const Fieldset = ({ className, children, ...restProps }: PropsWithChildren<Props>) => (
  <fieldset {...restProps} className={clsx("utrecht-form-fieldset", className)}>
    {children}
  </fieldset>
);
