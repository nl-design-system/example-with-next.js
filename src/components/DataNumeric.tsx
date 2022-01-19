/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

interface DataNumericProps extends InputHTMLAttributes<HTMLDataElement> {
  value?: number | string;
  locale?: string;
}

export const DataNumeric = ({
  children,
  value,
  locale,
  className,
  ...restProps
}: PropsWithChildren<DataNumericProps>) => {
  const number: number | undefined = typeof value == "string" ? parseFloat(value) : value;
  const format = typeof locale === "string" && typeof number == "number";
  const formatted: string = format ? new Intl.NumberFormat(locale, { style: "decimal" }).format(number) : String(value);
  return (
    <data {...restProps} value={value} className={clsx("data", "data--numeric", className)}>
      {format ? formatted : children}
      {/*TODO: Localisation, avoid white space breaks */}
    </data>
  );
};
