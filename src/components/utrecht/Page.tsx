/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type PageProps = HTMLAttributes<HTMLDivElement>;

export const Page = ({ children, className, ...restProps }: PropsWithChildren<PageProps>) => (
  <div {...restProps} className={clsx("utrecht-page", className)}>
    {children}
  </div>
);
