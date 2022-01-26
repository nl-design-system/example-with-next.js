/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type PageContentProps = HTMLAttributes<HTMLDivElement>;

export const PageContent = ({ children, className, ...restProps }: PropsWithChildren<PageContentProps>) => (
  <div {...restProps} className={clsx("utrecht-page-content", className)}>
    {children}
  </div>
);

export type PageContentMainProps = HTMLAttributes<HTMLDivElement>;

export const PageContentMain = ({ children, className, ...restProps }: PropsWithChildren<PageContentMainProps>) => (
  <main {...restProps} className="utrecht-page-content__main">
    {children}
  </main>
);
