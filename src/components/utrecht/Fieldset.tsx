import clsx from "clsx";
import { FieldsetHTMLAttributes, PropsWithChildren } from "react";

type Props = FieldsetHTMLAttributes<HTMLFieldSetElement>;
export const Fieldset = ({ className, children }: PropsWithChildren<Props>) => (
  <fieldset className={clsx("utrecht-form-fieldset", className)}>{children}</fieldset>
);
