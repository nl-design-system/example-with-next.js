import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  invalid?: boolean;
}

export const DateInput = ({ disabled, invalid, readOnly, required, className, ...restProps }: Props) => (
  <input
    {...restProps}
    type="date"
    className={clsx(
      "utrecht-textbox",
      "utrecht-textbox--html-input",
      disabled && "utrecht-textbox--disabled",
      invalid && "utrecht-textbox--invalid",
      readOnly && "utrecht-textbox--readonly",
      required && "utrecht-textbox--required",
      className
    )}
    disabled={disabled}
    readOnly={readOnly}
    required={required}
    aria-invalid={invalid || undefined}
  />
);
