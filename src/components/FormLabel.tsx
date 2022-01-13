import clsx from "clsx";
import { HTMLAttributes, LabelHTMLAttributes, PropsWithChildren } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  type?: "checkbox" | "radio";
  disabled?: boolean;
  checked?: boolean;
}

export const FormLabel = ({ children, className, type, disabled, checked, ...restProps }: PropsWithChildren<Props>) => (
  <label
    {...restProps}
    className={clsx(
      "utrecht-form-label",
      type && `utrecht-form-label--${type}`,
      disabled && "utrecht-form-label--disabled",
      checked && "utrecht-form-label--checked",
      className
    )}
  >
    {children}
  </label>
);
