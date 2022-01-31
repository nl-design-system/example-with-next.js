/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, forwardRef, ForwardedRef } from "react";

export type PageHeaderProps = HTMLAttributes<HTMLDivElement>;

export const PageHeader = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageHeaderProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <header {...restProps} ref={ref} className={clsx("utrecht-page-header", className)}>
      {children}
    </header>
  )
);

PageHeader.displayName = "utrecht-page-header";