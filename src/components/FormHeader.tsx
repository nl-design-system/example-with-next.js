/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Yolijn van der Kolk
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import style from "./FormHeader.module.css";

type Props = HTMLAttributes<HTMLElement>;

export const FormHeader = forwardRef(
  ({ className, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLElement>) => (
    <header ref={ref} className={clsx(style["form-header"], className)}>
      {children}
    </header>
  )
);

FormHeader.displayName = "form-header";

export const FormHeaderTitle = forwardRef(
  ({ className, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLParagraphElement>) => (
    <p ref={ref} className={clsx(style["form-header__title"], className)}>
      {children}
    </p>
  )
);

FormHeaderTitle.displayName = "form-header-title";
