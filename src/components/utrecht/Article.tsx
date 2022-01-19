/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export type ArticleProps = HTMLAttributes<HTMLElement>;

export const Article = ({ children, className, ...restProps }: PropsWithChildren<ArticleProps>) => (
  <article {...restProps} className={clsx("utrecht-article", className)}>
    {children}
  </article>
);
