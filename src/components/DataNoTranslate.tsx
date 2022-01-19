/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { InputHTMLAttributes, PropsWithChildren } from "react";

type DataNoTranslateProps = InputHTMLAttributes<HTMLElement>;

export const DataNoTranslate = ({ children, className, ...restProps }: PropsWithChildren<DataNoTranslateProps>) => (
  <span {...restProps} className="notranslate">
    {children}
  </span>
);
