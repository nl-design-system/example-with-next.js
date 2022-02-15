import clsx from "clsx";
import { InputHTMLAttributes, ForwardedRef, forwardRef } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "readOnly"> {
  invalid?: boolean;
  id: string;
}

export const RadioButton = forwardRef(
  ({ disabled, invalid, required, className, ...restProps }: Props, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      ref={ref}
      type="radio"
      className={clsx(
        "utrecht-radio-button",
        "utrecht-radio-button--html-input",
        disabled && "utrecht-radio-button--disabled",
        invalid && "utrecht-radio-button--invalid",
        required && "utrecht-radio-button--required",
        className
      )}
      disabled={disabled}
      required={required}
    />
  )
);

RadioButton.displayName = "utrecht-radio-button";
