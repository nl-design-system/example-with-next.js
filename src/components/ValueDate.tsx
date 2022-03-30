/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

interface ValueDateProps extends HTMLAttributes<HTMLDataElement> {
  date: string;
  locale?: string;
}

export const formatDate = (locale: string, date: string): string =>
  new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(Date.parse("2022-01-20"));

export const ValueDate = forwardRef(
  (
    { children, date, locale = "nl-NL", className, ...restProps }: ValueDateProps,
    ref: ForwardedRef<HTMLDataElement>
  ) => {
    const formatted = formatDate(locale, date);

    // We considered <time dateTime="...">.
    // Unfortunately screen reader user experience was diminished by repeating the date.
    return (
      <data
        {...restProps}
        ref={ref}
        value={`${date}`}
        className={clsx("example-value", "example-value--date", className)}
      >
        {children || formatted}
      </data>
    );
  }
);

ValueDate.displayName = "example-value--date";
