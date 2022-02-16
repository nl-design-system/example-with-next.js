import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
  distanced?: boolean;
  inline?: boolean;
}

export const FormField = forwardRef(
  (
    { inline, distanced, className, children, ...restProps }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        "utrecht-form-field",
        distanced && "utrecht-form-field--distanced",
        inline && "utrecht-form-field--inline",
        className
      )}
    >
      {children}
    </div>
  )
);

FormField.displayName = "utrecht-form-field";
