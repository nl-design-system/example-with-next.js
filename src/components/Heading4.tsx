/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type Heading4Props = InputHTMLAttributes<HTMLHeadingElement>;

export const Heading4 = ({ children, className, ...restProps }: PropsWithChildren<Heading4Props>) => (
  <h4 {...restProps} className={clsx("utrecht-heading-4", className)}>
    {children}
  </h4>
);
