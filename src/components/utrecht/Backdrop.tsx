/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type BackdropProps = HTMLAttributes<HTMLDivElement>;

export const Backdrop = ({ children, className, ...restProps }: PropsWithChildren<BackdropProps>) => (
  <div {...restProps} className={clsx("utrecht-backdrop", className)}>
    {children}
  </div>
);
