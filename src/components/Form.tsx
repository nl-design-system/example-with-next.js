/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Yolijn van der Kolk
*/

import clsx from "clsx";
import { PropsWithChildren, FormHTMLAttributes, forwardRef, ForwardedRef } from "react";
import style from "./Form.module.css";

type Props = FormHTMLAttributes<HTMLFormElement>;

export const Form = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLFormElement>) => (
    <form ref={ref} className={clsx(style["form"], className)} {...restProps}>
      {children}
    </form>
  )
);

Form.displayName = "form";
