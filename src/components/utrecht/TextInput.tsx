import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type TextInputTypes = "text" | "email" | "tel" | "url" | "password";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  invalid?: boolean;
  type?: TextInputTypes;
}

export const TextInput = ({
  disabled,
  invalid,
  readOnly,
  required,
  className,
  type = "text",
  inputMode,
  ...restProps
}: Props) => (
  <input
    {...restProps}
    type={type}
    className={clsx(
      "utrecht-textbox",
      "utrecht-textbox--html-input",
      type === "url" && "utrecht-textbox--url",
      type === "password" && "utrecht-textbox--password",
      inputMode === "numeric" && "utrecht-textbox--numeric",
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
    inputMode={inputMode}
  />
);
