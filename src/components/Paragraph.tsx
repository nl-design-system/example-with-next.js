/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface ParagraphProps extends InputHTMLAttributes<HTMLParagraphElement> {
  lead?: boolean;
}

export const Paragraph = ({ children, className, lead, ...restProps }: ParagraphProps) => (
  <p {...restProps} className={clsx("utrecht-paragraph", lead && "utrecht-paragraph--lead", className)}>
    {children}
  </p>
);
