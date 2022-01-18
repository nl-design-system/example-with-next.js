/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type SeparatorProps = InputHTMLAttributes<HTMLHRElement>;

export const Separator = ({ className, ...restProps }: SeparatorProps) => (
  <hr {...restProps} className={clsx("utrecht-separator", className)} />
);
