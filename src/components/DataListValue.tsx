import { PropsWithChildren } from "react";
import { EmptyIndicator } from "./EmptyIndicator";

interface Props {
  value?: number | string;
  emptyDescription: string;
}

export const DataListValue = ({ value, children, emptyDescription }: PropsWithChildren<Props>) => {
  const empty = value === undefined || value === "" || value === null;

  return <dd>{empty ? <EmptyIndicator title={emptyDescription} /> : children}</dd>;
};
