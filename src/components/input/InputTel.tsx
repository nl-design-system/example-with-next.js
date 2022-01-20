import { InputHTMLAttributes } from "react";
import { FormLabel, FormField, TextInput } from "../utrecht";
import { useTranslation } from "next-i18next";
import { ValidationError, ValidationMessages } from "../ValidationMessages";

interface InputTelProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  required?: boolean;
  id: string;
  errors?: ValidationError[];
}

export const def = {
  label: "tel",
  autoComplete: "tel",
  type: "tel",
};

export const InputTel = ({ id, autoComplete, errors, ...restProps }: InputTelProps) => {
  const { t } = useTranslation("form");

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input}`}>{t(def.label)}</FormLabel>
      <TextInput
        {...restProps}
        type={def.type}
        id={`${id}-input}`}
        autoComplete={`${def.autoComplete} ${autoComplete}`}
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") : undefined}
      />
      <ValidationMessages errors={errors} />
    </FormField>
  );
};
