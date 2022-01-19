/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from "clsx";
import { InputHTMLAttributes, PropsWithChildren } from "react";

interface DataDateProps extends InputHTMLAttributes<HTMLTimeElement> {
  dateTime: string;
  locale?: string;
}

export const DataDate = ({ children, dateTime, className, ...restProps }: PropsWithChildren<DataDateProps>) => (
  <time {...restProps} dateTime={dateTime} className={clsx("data", "data--date", className)}>
    {children}
    {/*TODO: Localisation, avoid white space breaks */}
  </time>
);
