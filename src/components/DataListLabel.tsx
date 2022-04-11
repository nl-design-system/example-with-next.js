import clsx from "clsx";
import { forwardRef, ForwardedRef, HTMLAttributes, PropsWithChildren } from "react";
import style from "./DataListValue.module.css";

interface DataListLabelProps extends HTMLAttributes<HTMLElement> {}

export const DataListLabel = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DataListLabelProps>, ref: ForwardedRef<HTMLElement>) => {
    return (
      <dt {...restProps} className={clsx("example-data-list__label", className)} ref={ref}>
        {children}
      </dt>
    );
  }
);
