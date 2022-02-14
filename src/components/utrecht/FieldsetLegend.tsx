import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLLegendElement> {
  distanced?: boolean;
}

export const FieldsetLegend = forwardRef(
  (
    { distanced, className, children, ...restProps }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLLegendElement>
  ) => (
    <legend
      {...restProps}
      ref={ref}
      className={clsx(
        "utrecht-form-fieldset__legend",
        "utrecht-form-fieldset__legend--reset-legend",
        distanced && "utrecht-form-fieldset__legend--distanced",
        className
      )}
    >
      {children}
    </legend>
  )
);

FieldsetLegend.displayName = "utrecht-form-fieldset__legend";
