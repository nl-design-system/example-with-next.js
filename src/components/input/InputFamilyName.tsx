import { InputHTMLAttributes } from "react";
import { FormLabel, FormField, TextInput } from "../utrecht";
import { useTranslation } from "next-i18next";
import { ValidationError, ValidationMessages } from "../ValidationMessages";

interface InputFamilyNameProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  required?: boolean;
  id: string;
  errors?: ValidationError[];
}

export const def = {
  label: "family-name",
  autoComplete: "family-name",
  type: "text",
};

export const InputFamilyName = ({ id, autoComplete, errors, ...restProps }: InputFamilyNameProps) => {
  const { t } = useTranslation("form");

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(def.label)}</FormLabel>
      <TextInput
        {...restProps}
        id={`${id}-input`}
        autoComplete={`${def.autoComplete} ${autoComplete}`}
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") : undefined}
      />
      <ValidationMessages errors={errors}></ValidationMessages>
    </FormField>
  );
};
