/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type ArticleProps = InputHTMLAttributes<HTMLElement>;

export const Article = ({ children, className, ...restProps }: ArticleProps) => (
  <article {...restProps} className={clsx("utrecht-article", className)}>
    {children}
  </article>
);
