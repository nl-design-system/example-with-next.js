import { InputHTMLAttributes } from "react";
import { FormLabel, FormField, TextInput } from "../utrecht";
import { TextInputTypes } from "../utrecht/TextInput";
import { useTranslation } from "next-i18next";
import { ValidationError, ValidationMessages } from "../ValidationMessages";

interface InputEmailProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  required?: boolean;
  id: string;
  errors?: ValidationError[];
}

export const def: {
  label: string;
  autoComplete: string;
  type: TextInputTypes;
} = {
  label: "email",
  autoComplete: "email",
  type: "email",
};

export const InputEmail = ({ id, autoComplete, errors, ...restProps }: InputEmailProps) => {
  const { t } = useTranslation("form");

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(def.label)}</FormLabel>
      <TextInput
        {...restProps}
        type={def.type}
        id={`${id}-input`}
        autoComplete={`${def.autoComplete} ${autoComplete}`}
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") : undefined}
      />
      <ValidationMessages errors={errors}></ValidationMessages>
    </FormField>
  );
};