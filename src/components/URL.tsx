/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type URLProps = InputHTMLAttributes<HTMLElement>;

export const URL = ({ children, className, ...restProps }: PropsWithChildren<URLProps>) => (
  <bdi {...restProps} className={clsx("utrecht-url", className)}>
    {children}
  </bdi>
);
