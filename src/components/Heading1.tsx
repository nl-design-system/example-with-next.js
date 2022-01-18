/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type Heading1Props = InputHTMLAttributes<HTMLHeadingElement>;

export const Heading1 = ({ children, className, ...restProps }: PropsWithChildren<Heading1Props>) => (
  <h1 {...restProps} className={clsx("utrecht-heading-1", className)}>
    {children}
  </h1>
);
