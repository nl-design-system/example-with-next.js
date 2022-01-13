import clsx from "clsx";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  invalid?: boolean;
}

export const Textarea = ({ disabled, invalid, readOnly, required, className, ...restProps }: Props) => (
  <textarea
    {...restProps}
    className={clsx(
      "utrecht-textarea",
      "utrecht-textarea--html-textarea",
      disabled && "utrecht-textarea--disabled",
      invalid && "utrecht-textarea--invalid",
      readOnly && "utrecht-textarea--readonly",
      required && "utrecht-textarea--required",
      className
    )}
    disabled={disabled}
    readOnly={readOnly}
    required={required}
    aria-invalid={invalid || undefined}
  />
);
