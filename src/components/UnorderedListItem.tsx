/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type UnorderedListItemProps = InputHTMLAttributes<HTMLLIElement>;

export const UnorderedListItem = ({ children, className, ...restProps }: PropsWithChildren<UnorderedListItemProps>) => (
  <li {...restProps} className={clsx("utrecht-unordered-list__item", className)}>
    {children}
  </li>
);
