/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type DocumentProps = InputHTMLAttributes<HTMLDivElement>;

export const Document = ({ children, className, ...restProps }: PropsWithChildren<DocumentProps>) => (
  <div {...restProps} className={clsx("utrecht-document", className)}>
    {children}
  </div>
);
