/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type Heading5Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading5 = ({ children, className, ...restProps }: PropsWithChildren<Heading5Props>) => (
  <h5 {...restProps} className={clsx("utrecht-heading-5", className)}>
    {children}
  </h5>
);
