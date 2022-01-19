/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type URLProps = HTMLAttributes<HTMLElement>;

export const URL = ({ children, className, ...restProps }: PropsWithChildren<URLProps>) => (
  <bdi {...restProps} className={clsx("utrecht-url", className)}>
    {children}
  </bdi>
);
