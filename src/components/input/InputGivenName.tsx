import { InputHTMLAttributes } from "react";
import { FormLabel, FormField, TextInput } from "../utrecht";
import { useTranslation } from "next-i18next";
import { ValidationError, ValidationMessages } from "../ValidationMessages";

interface InputGivenNameProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  required?: boolean;
  id: string;
  errors?: ValidationError[];
}

export const def = {
  label: "given-name",
  autoComplete: "given-name",
  type: "text",
};

export const InputGivenName = ({ id, autoComplete, errors, ...restProps }: InputGivenNameProps) => {
  const { t } = useTranslation("form");

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input}`}>{t(def.label)}</FormLabel>
      <TextInput
        {...restProps}
        id={`${id}-input}`}
        autoComplete={`${def.autoComplete} ${autoComplete}`}
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") : undefined}
      />
      <ValidationMessages errors={errors} />
    </FormField>
  );
};
