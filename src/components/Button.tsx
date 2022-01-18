import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean;
}

export const Button = ({ busy, disabled, type, children, ...restProps }: PropsWithChildren<Props>) => {
  return (
    <button
      {...restProps}
      className={clsx(
        "utrecht-button",
        busy && "utrecht-button--busy",
        disabled && "utrecht-button--disabled",
        type === "submit" && "utrecht-button--submit"
      )}
      aria-busy={busy && "true"}
      disabled={disabled}
      type={type || "button"}
    >
      {children}
    </button>
  );
};
