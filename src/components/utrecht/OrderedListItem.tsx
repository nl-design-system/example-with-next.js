/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { LiHTMLAttributes, PropsWithChildren } from "react";

export type OrderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const OrderedListItem = ({ children, className, ...restProps }: PropsWithChildren<OrderedListItemProps>) => (
  <li {...restProps} className={clsx("utrecht-ordered-list__item", className)}>
    {children}
  </li>
);
