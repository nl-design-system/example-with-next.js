/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Yolijn van der Kolk
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";

import style from "./ButtonGroup.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  distanced?: boolean;
}

export const ButtonGroup = forwardRef(
  ({ distanced, children, ...restProps }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      className={clsx(style["button-group"], distanced && style["button-group--distanced"])}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  )
);

ButtonGroup.displayName = "button-group";
