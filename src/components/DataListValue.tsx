import clsx from "clsx";
import { forwardRef, ForwardedRef, PropsWithChildren, HTMLAttributes } from "react";

interface DataListValueProps extends HTMLAttributes<HTMLElement> {
  value?: number | string;
  emptyDescription?: string;
  multiline?: boolean;
  translate?: boolean;
}

export const DataListValue = forwardRef(
  (
    { value, children, className, emptyDescription, multiline, translate }: PropsWithChildren<DataListValueProps>,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const empty = value === undefined || value === "" || value === null;

    return (
      <dd
        className={clsx(
          "example-data-list__value",
          "example-data-list__value--html-dd",
          className,
          multiline && "example-data-list-value--multiline"
        )}
        translate={typeof translate === "boolean" ? (translate ? "yes" : "no") : undefined}
      >
        {empty ? <span aria-label={emptyDescription}>-</span> : children}
      </dd>
    );
  }
);
