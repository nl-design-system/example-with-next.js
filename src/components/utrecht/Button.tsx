import clsx from "clsx";
import { forwardRef, ButtonHTMLAttributes, PropsWithChildren, ForwardedRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean;
  distanced?: boolean;
}

export const Button = forwardRef(
  (
    { busy, disabled, distanced, type, children, ...restProps }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        className={clsx(
          "utrecht-button",
          busy && "utrecht-button--busy",
          disabled && "utrecht-button--disabled",
          type === "submit" && "utrecht-button--submit",
          distanced && "utrecht-button--distanced"
        )}
        aria-busy={busy && "true"}
        disabled={disabled}
        type={type || "button"}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "utrecht-button";
