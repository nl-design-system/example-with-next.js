/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

interface ValueIBANProps extends HTMLAttributes<HTMLDataElement> {
  iban: string;
}

export const normalizeIBAN = (iban: string): string =>
  iban
    // Remove whitespace and word separator characters such as the dash
    .replace(/[\s+\W]+/g, "")
    .toUpperCase();

export const formatIBAN = (normalizedIBAN: string): string =>
  normalizedIBAN
    // Add a space after every four characters, except at the end
    .replace(/(.{4})(?!$)/g, "$1 ");

export const ValueIBAN = forwardRef(
  ({ children, iban, className, ...restProps }: ValueIBANProps, ref: ForwardedRef<HTMLDataElement>) => {
    const normalized = normalizeIBAN(iban);
    const formatted = formatIBAN(normalized);

    return (
      <data
        {...restProps}
        ref={ref}
        value={normalized}
        className={clsx("example-value", "example-value--iban", className)}
      >
        {children || formatted}
      </data>
    );
  }
);

ValueIBAN.displayName = "example-value--iban";
