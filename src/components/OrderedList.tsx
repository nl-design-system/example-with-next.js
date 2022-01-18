/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type OrderedListProps = InputHTMLAttributes<HTMLOListElement>;

export const OrderedList = ({ children, className, ...restProps }: OrderedListProps) => (
  <ol {...restProps} className={clsx("utrecht-ordered-list", className)}>
    {children}
  </ol>
);
