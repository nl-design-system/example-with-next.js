/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type PageFooterProps = HTMLAttributes<HTMLDivElement>;

export const PageFooter = ({ children, className, ...restProps }: PropsWithChildren<PageFooterProps>) => (
  <footer {...restProps} className={clsx("utrecht-page-footer", className)}>
    {children}
  </footer>
);
