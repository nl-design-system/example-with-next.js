/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type Heading6Props = InputHTMLAttributes<HTMLHeadingElement>;

export const Heading6 = ({ children, className, ...restProps }: PropsWithChildren<Heading6Props>) => (
  <h6 {...restProps} className={clsx("utrecht-heading-6", className)}>
    {children}
  </h6>
);
