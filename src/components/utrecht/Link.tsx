/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  external?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
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
      visited,
      ...restProps
    }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => (
    // "utrecht-link--telephone" does not have a corresponding API,
    // since it is primarily a basis for implementing input[href^="tel"].
    // Telephone number rendering in React is best achieved using composition
    // of the TelephoneValue component.
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
