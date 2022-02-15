import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import style from "./FormHeader.module.css";

type Props = HTMLAttributes<HTMLElement>;

export const FormHeader = forwardRef(
  ({ className, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => (
    <header ref={ref} className={clsx(style["form-header"], className)}>
      {children}
    </header>
  )
);

export const FormHeaderTitle = forwardRef(
  ({ className, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => (
    <p ref={ref} className={clsx(style["form-header__title"], className)}>
      {children}
    </p>
  )
);
