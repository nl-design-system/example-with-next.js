/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, forwardRef, ForwardedRef } from "react";

export type URLProps = HTMLAttributes<HTMLElement>;

export const URL = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<URLProps>, ref: ForwardedRef<HTMLElement>) => (
    <bdi {...restProps} ref={ref} className={clsx("utrecht-url", className)}>
      {children}
    </bdi>
  )
);
