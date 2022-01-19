/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type Heading3Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading3 = ({ children, className, ...restProps }: PropsWithChildren<Heading3Props>) => (
  <h3 {...restProps} className={clsx("utrecht-heading-3", className)}>
    {children}
  </h3>
);
