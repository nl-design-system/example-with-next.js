import clsx from "clsx";
import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";

export type TextInputTypes = "text" | "email" | "tel" | "url" | "password";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  invalid?: boolean;
  type?: TextInputTypes;
}

export const TextInput = forwardRef(
  (
    {
      disabled,
      invalid,
      readOnly,
      required,
      className,
      type = "text",
      maxLength,
      inputMode,
      style,
      ...restProps
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <input
      {...restProps}
      ref={ref}
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
        typeof maxLength === "number" && "utrecht-textbox--maxlength",
        className
      )}
      style={{
        ["--maxlength" as any]: typeof maxLength === "number" ? maxLength : undefined,
        ...style,
      }}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      aria-invalid={invalid || undefined}
      inputMode={inputMode}
    />
  )
);
