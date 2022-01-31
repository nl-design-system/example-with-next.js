/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, forwardRef, ForwardedRef } from "react";

export type SeparatorProps = HTMLAttributes<HTMLHRElement>;

export const Separator = forwardRef(({ className, ...restProps }: SeparatorProps, ref: ForwardedRef<HTMLHRElement>) => (
  <hr {...restProps} ref={ref} className={clsx("utrecht-separator", className)} />
));

Separator.displayName = "utrecht-separator";
