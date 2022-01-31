/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { AnchorHTMLAttributes, PropsWithChildren, ForwardedRef, forwardRef } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  external?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  telephone?: boolean;
  visited?: boolean;
}

export const Link = forwardRef(
  (
    {
      children,
      className,
      active,
      external,
      focus,
      focusVisible,
      hover,
      telephone,
      visited,
      ...restProps
    }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => (
    <a
      {...restProps}
      ref={ref}
      className={clsx(
        "utrecht-link",
        {
          "utrecht-link--active": active,
          "utrecht-link--external": external,
          "utrecht-link--focus": focus,
          "utrecht-link--focus-visible": focusVisible,
          "utrecht-link--hover": hover,
          "utrecht-link--telephone": telephone,
          "utrecht-link--visited": visited,
        },
        className
      )}
      rel={external ? "external noopener noreferrer" : undefined}
    >
      {children}
    </a>
  )
);

Link.displayName = "utrecht-link";
