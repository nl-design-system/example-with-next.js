import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

type Props = HTMLAttributes<HTMLLegendElement>;
export const FieldsetLegend = ({ className, children }: PropsWithChildren<Props>) => (
  <legend className={clsx("utrecht-form-fieldset__legend", className)}>{children}</legend>
);
