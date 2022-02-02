/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { AnchorHTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  visible?: boolean;
  hidden?: boolean;
}

export const SkipLink = forwardRef(
  (
    { children, visible, href, hidden, ...restProps }: PropsWithChildren<SkipLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => (
    <a
      {...restProps}
      className={clsx("skip-link", hidden && "skip-link--hidden", visible && "skip-link--visible")}
      ref={ref}
    >
      {children}
    </a>
  )
);

SkipLink.displayName = "skip-link";
