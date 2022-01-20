/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Button } from "./utrecht";

type SaveButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SaveButton = ({ children, ...restProps }: PropsWithChildren<SaveButtonProps>) => (
  <Button {...restProps} type="submit" formNoValidate>
    {children}
  </Button>
);
