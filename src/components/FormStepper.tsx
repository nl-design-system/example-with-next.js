import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import style from "./FormStepper.module.css";

type Props = HTMLAttributes<HTMLDivElement>;

export const FormStepper = forwardRef(
  ({ className, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={clsx(style["form-stepper"], className)}>
      {children}
    </div>
  )
);
