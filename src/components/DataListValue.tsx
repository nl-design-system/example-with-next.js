import clsx from "clsx";
import { PropsWithChildren } from "react";
import { EmptyIndicator } from "./EmptyIndicator";
import style from "./DataListValue.module.css";

interface Props {
  value?: number | string;
  emptyDescription: string;
}

export const DataListValue = ({ value, children, emptyDescription }: PropsWithChildren<Props>) => {
  const empty = value === undefined || value === "" || value === null;

  return (
    <dd className={clsx(style["data-list-value"])}>{empty ? <EmptyIndicator title={emptyDescription} /> : children}</dd>
  );
};
