/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, forwardRef, ForwardedRef } from "react";

export type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export const Surface = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<SurfaceProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx("utrecht-surface", className)}>
      {children}
    </div>
  )
);
