/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { HTMLAttributes, PropsWithChildren } from "react";

type AlertProps = HTMLAttributes<HTMLDivElement>;

export const Alert = ({ children, ...restProps }: PropsWithChildren<AlertProps>) => (
  <div role="alert" {...restProps}>
    {children}
  </div>
);
