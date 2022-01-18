/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type Heading5Props = InputHTMLAttributes<HTMLHeadingElement>;

export const Heading5 = ({ children, className, ...restProps }: Heading5Props) => (
  <h5 {...restProps} className={clsx("utrecht-heading-5", className)}>
    {children}
  </h5>
);
