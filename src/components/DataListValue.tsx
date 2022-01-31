import clsx from "clsx";
import { PropsWithChildren, HTMLAttributes } from "react";
import { EmptyIndicator } from "./EmptyIndicator";
import style from "./DataListValue.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  value?: number | string;
  emptyDescription: string;
}

export const DataListValue = ({ value, children, className, emptyDescription }: PropsWithChildren<Props>) => {
  const empty = value === undefined || value === "" || value === null;

  return (
    <dd className={clsx(style["data-list-value"], className)}>
      {empty ? <EmptyIndicator title={emptyDescription} /> : children}
    </dd>
  );
};
