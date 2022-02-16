/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

type SeparatorProps = HTMLAttributes<HTMLHRElement>;

// Do not pass `children` along with `restProps`
/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "children" }] */

export const Separator = forwardRef(
  ({ className, children, ...restProps }: SeparatorProps, ref: ForwardedRef<HTMLHRElement>) => (
    <hr {...restProps} ref={ref} className={clsx("utrecht-separator", className)} />
  )
);

Separator.displayName = "utrecht-separator";
