/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type PageHeaderProps = HTMLAttributes<HTMLDivElement>;

export const PageHeader = ({ children, className, ...restProps }: PropsWithChildren<PageHeaderProps>) => (
  <header {...restProps} className={clsx("utrecht-page-header", className)}>
    {children}
  </header>
);
