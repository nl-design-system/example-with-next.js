/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

export type HTMLProps = HTMLAttributes<HTMLDivElement>;

export const HTML = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<HTMLProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx("utrecht-html", className)}>
      {children}
    </div>
  )
);

HTML.displayName = "utrecht-html";
