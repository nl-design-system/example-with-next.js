/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { OlHTMLAttributes, PropsWithChildren } from "react";

export type OrderedListProps = OlHTMLAttributes<HTMLOListElement>;

export const OrderedList = ({ children, className, ...restProps }: PropsWithChildren<OrderedListProps>) => (
  <ol {...restProps} className={clsx("utrecht-ordered-list", className)}>
    {children}
  </ol>
);
