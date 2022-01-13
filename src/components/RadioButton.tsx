import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "readOnly"> {
  invalid?: boolean;
  id: string;
  value: string;
}

export const RadioButton = ({ disabled, invalid, required, className, ...restProps }: Props) => (
  <input
    {...restProps}
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
);
