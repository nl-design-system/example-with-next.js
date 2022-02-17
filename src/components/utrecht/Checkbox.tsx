import clsx from "clsx";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "readOnly"> {
  invalid?: boolean;
  id: string;
}

export const Checkbox = forwardRef(
  ({ disabled, invalid, required, className, ...restProps }: Props, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      ref={ref}
      type="checkbox"
      className={clsx(
        "utrecht-checkbox",
        "utrecht-checkbox--html-input",
        disabled && "utrecht-checkbox--disabled",
        invalid && "utrecht-checkbox--invalid",
        required && "utrecht-checkbox--required",
        className
      )}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      required={required}
    />
  )
);

Checkbox.displayName = "utrecht-checkbox";
