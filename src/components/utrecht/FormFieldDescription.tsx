import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  invalid?: boolean;
  valid?: boolean;
  warning?: boolean;
}

export const FormFieldDescription = forwardRef(
  (
    { id, invalid, valid, warning, className, children, ...restProps }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <div
      {...restProps}
      ref={ref}
      id={id}
      className={clsx(
        "utrecht-form-field-description",
        invalid && "utrecht-form-field-description--invalid",
        valid && "utrecht-form-field-description--valid",
        warning && "utrecht-form-field-description--warning",
        className
      )}
    >
      {children}
    </div>
  )
);

FormFieldDescription.displayName = "utrecht-form-field-description";
