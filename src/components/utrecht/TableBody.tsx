/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, PropsWithChildren, TableHTMLAttributes } from "react";

type TableBodyProps = TableHTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableBodyProps>,
    ref: ForwardedRef<HTMLTableSectionElement>
  ) => (
    <tbody {...restProps} ref={ref} className={clsx("utrecht-table__body", className)}>
      {children}
    </tbody>
  )
);

TableBody.displayName = "utrecht-table__body";
