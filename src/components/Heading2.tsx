/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type Heading2Props = InputHTMLAttributes<HTMLHeadingElement>;

export const Heading2 = ({ children, className, ...restProps }: Heading2Props) => (
  <h2 {...restProps} className={clsx("utrecht-heading-2", className)}>
    {children}
  </h2>
);
