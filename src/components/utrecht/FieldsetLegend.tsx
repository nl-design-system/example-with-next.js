import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

type Props = HTMLAttributes<HTMLLegendElement>;

export const FieldsetLegend = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLLegendElement>) => (
    <legend {...restProps} ref={ref} className={clsx("utrecht-form-fieldset__legend", className)}>
      {children}
    </legend>
  )
);
