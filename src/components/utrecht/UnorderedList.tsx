/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  nested?: boolean;
}

export const UnorderedList = ({ children, className, nested, ...restProps }: PropsWithChildren<UnorderedListProps>) => (
  <ul {...restProps} className={clsx("utrecht-unordered-list", nested && "utrecht-unordered-list--nested", className)}>
    {children}
  </ul>
);
