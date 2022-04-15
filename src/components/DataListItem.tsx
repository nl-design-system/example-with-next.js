import clsx from "clsx";
import { forwardRef, ForwardedRef, HTMLAttributes, PropsWithChildren } from "react";

interface DataListItemProps extends HTMLAttributes<HTMLDivElement> {}

export const DataListItem = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DataListItemProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div {...restProps} className={clsx("example-data-list__item", className)} ref={ref}>
        {children}
      </div>
    );
  }
);
