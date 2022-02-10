import clsx from "clsx";
import { FieldsetHTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

type Props = FieldsetHTMLAttributes<HTMLFieldSetElement>;

export const Fieldset = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLFieldSetElement>) => (
    <fieldset
      {...restProps}
      ref={ref}
      className={clsx("utrecht-form-fieldset", "utrecht-form-fieldset--reset-fieldset", className)}
    >
      {children}
    </fieldset>
  )
);

Fieldset.displayName = "utrecht-form-fieldset";
