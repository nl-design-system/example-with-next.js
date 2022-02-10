import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { Fieldset } from "./utrecht";

import style from "./RadioGroup.module.css";

interface Props extends HTMLAttributes<HTMLFieldSetElement> {
  distanced?: boolean;
  inline?: boolean;
  label: string;
}

export const RadioGroup = forwardRef(
  (
    { label, inline, distanced, className, children, ...restProps }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLFieldSetElement>
  ) => (
    <Fieldset
      className={clsx(
        style["radio-group--html-fieldset"],
        "utrecht-form-field-radio-group",
        {
          "utrecht-form-field-radio-group--distanced": distanced,
        },
        className
      )}
      role="radiogroup"
      ref={ref}
      {...restProps}
    >
      <legend
        className={clsx(
          "utrecht-form-field-radio-group__label",
          "utrecht-form-label",
          style["radio-group__label--html-legend"]
        )}
      >
        {label}
      </legend>
      <div
        className={clsx({
          [style["radio-group--inline"]]: inline,
        })}
      >
        {children}
      </div>
    </Fieldset>
  )
);
