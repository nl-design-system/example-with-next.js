/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes } from "react";

export type SeparatorProps = HTMLAttributes<HTMLHRElement>;

export const Separator = ({ className, ...restProps }: SeparatorProps) => (
  <hr {...restProps} className={clsx("utrecht-separator", className)} />
);
