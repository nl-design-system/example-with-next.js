import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
type Props = HTMLAttributes<HTMLDivElement>;

export const FormField = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx("utrecht-form-field", "utrecht-form-field--distanced", className)}>
      {children}
    </div>
  )
);

FormField.displayName = "utrecht-form-field";
