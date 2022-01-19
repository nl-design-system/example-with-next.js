import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "readOnly"> {
  invalid?: boolean;
  id: string;
}

export const Checkbox = ({ disabled, invalid, required, className, ...restProps }: Props) => (
  <input
    {...restProps}
    type="checkbox"
    className={clsx(
      "utrecht-checkbox",
      "utrecht-checkbox--html-input",
      disabled && "utrecht-checkbox--disabled",
      invalid && "utrecht-checkbox--invalid",
      required && "utrecht-checkbox--required",
      className
    )}
    disabled={disabled}
    required={required}
  />
);
