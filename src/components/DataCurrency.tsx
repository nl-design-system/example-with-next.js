/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

interface DataCurrencyProps extends InputHTMLAttributes<HTMLDataElement> {
  value: string;
}

export const DataCurrency = ({ children, className, ...restProps }: PropsWithChildren<DataCurrencyProps>) => (
  <data {...restProps} className={clsx("data", "data--currency", className)}>
    {children}
  </data>
);
