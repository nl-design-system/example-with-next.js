/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export const Surface = ({ children, className, ...restProps }: PropsWithChildren<SurfaceProps>) => (
  <div {...restProps} className={clsx("utrecht-surface", className)}>
    {children}
  </div>
);
