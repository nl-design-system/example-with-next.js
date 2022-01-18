/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type OrderedListItemProps = InputHTMLAttributes<HTMLLIElement>;

export const OrderedListItem = ({ children, className, ...restProps }: OrderedListItemProps) => (
  <li {...restProps} className={clsx("utrecht-ordered-list__item", className)}>
    {children}
  </li>
);
