/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export type BackdropProps = InputHTMLAttributes<HTMLDivElement>;

export const Backdrop = ({ children, className, ...restProps }: PropsWithChildren<BackdropProps>) => (
  <div {...restProps} className={clsx("utrecht-backdrop", className)}>
    {children}
  </div>
);
