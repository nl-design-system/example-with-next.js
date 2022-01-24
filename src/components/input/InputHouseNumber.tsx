import { InputHTMLAttributes } from "react";
import { FormLabel, FormField, TextInput } from "../utrecht";
import { useTranslation } from "next-i18next";
import { ValidationError, ValidationMessages } from "../ValidationMessages";

interface InputHouseNumberProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  required?: boolean;
  id: string;
  errors?: ValidationError[];
}

export const def = {
  label: "house-number",
  autoComplete: "house-number",
  numeric: true,
};

export const InputHouseNumber = ({ id, autoComplete, errors, ...restProps }: InputHouseNumberProps) => {
  const { t } = useTranslation("form");

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(def.label)}</FormLabel>
      <TextInput
        {...restProps}
        id={`${id}-input`}
        inputMode={def.numeric ? "numeric" : undefined}
        autoComplete={`${def.autoComplete} ${autoComplete}`}
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") : undefined}
      />
      <ValidationMessages errors={errors} />
    </FormField>
  );
};
