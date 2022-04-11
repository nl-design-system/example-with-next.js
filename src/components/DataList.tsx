import clsx from "clsx";
import { forwardRef, ForwardedRef, HTMLAttributes, PropsWithChildren } from "react";
import style from "./DataListValue.module.css";

interface DataListProps extends HTMLAttributes<HTMLElement> {}

export const DataList = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DataListProps>, ref: ForwardedRef<HTMLDListElement>) => {
    return (
      <dl {...restProps} className={clsx("example-data-list", className)} ref={ref}>
        {children}
      </dl>
    );
  }
);
