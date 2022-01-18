/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface UnorderedListProps extends InputHTMLAttributes<HTMLUListElement> {
  nested?: boolean;
}

export const UnorderedList = ({ children, className, nested, ...restProps }: UnorderedListProps) => (
  <ul {...restProps} className={clsx("utrecht-unordered-list", nested && "utrecht-unordered-list--nested", className)}>
    {children}
  </ul>
);
