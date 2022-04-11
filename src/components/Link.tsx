import { Link as DesignSystemLink } from "@utrecht/component-library-react";
import type { LinkProps as DesignSystemLinkProps } from "@utrecht/component-library-react/dist/cjs/Link";
import NextLink from "next/link";
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, DesignSystemLinkProps {}

export const Link = forwardRef(
  ({ children, href, ...restProps }: PropsWithChildren<LinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => {
    const link = (
      <DesignSystemLink ref={ref} {...restProps}>
        {children}
      </DesignSystemLink>
    );

    return typeof href === "string" ? (
      <NextLink href={href} passHref>
        {link}
      </NextLink>
    ) : (
      link
    );
  }
);

Link.displayName = "example-link";
