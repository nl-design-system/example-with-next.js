/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, forwardRef, ForwardedRef } from "react";

export type ArticleProps = HTMLAttributes<HTMLElement>;

export const Article = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ArticleProps>, ref: ForwardedRef<HTMLElement>) => (
    <article {...restProps} ref={ref} className={clsx("utrecht-article", className)}>
      {children}
    </article>
  )
);
