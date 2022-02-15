import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import style from "./FormFieldGroup.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
}

export const FormFieldGroup = forwardRef(
  ({ className, inline, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={clsx("form-field-group", { [style["form-field-group--inline"]]: inline }, className)}>
      {children}
    </div>
  )
);

FormFieldGroup.displayName = "form-field-group";
