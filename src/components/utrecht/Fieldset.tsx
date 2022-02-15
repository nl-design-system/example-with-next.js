import clsx from "clsx";
import { FieldsetHTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  distanced?: boolean;
}

export const Fieldset = forwardRef(
  (
    { distanced, className, children, ...restProps }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLFieldSetElement>
  ) => (
    <fieldset
      {...restProps}
      ref={ref}
      className={clsx(
        "utrecht-form-fieldset",
        "utrecht-form-fieldset--reset-fieldset",
        distanced && "utrecht-form-fieldset--distanced",
        className
      )}
    >
      {children}
    </fieldset>
  )
);

Fieldset.displayName = "utrecht-form-fieldset";
