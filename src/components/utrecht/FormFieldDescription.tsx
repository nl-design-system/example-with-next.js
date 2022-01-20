import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  invalid?: boolean;
  valid?: boolean;
  warning?: boolean;
}

export const FormFieldDescription = ({
  id,
  invalid,
  valid,
  warning,
  className,
  children,
  ...restProps
}: PropsWithChildren<Props>) => (
  <div
    {...restProps}
    id={id}
    className={clsx(
      "utrecht-form-field-description",
      invalid && "utrecht-form-field-description--invalid",
      valid && "utrecht-form-field-description--valid",
      warning && "utrecht-form-field-description--warning",
      className
    )}
  >
    {children}
  </div>
);
