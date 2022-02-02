import { useTranslation } from "next-i18next";
import { FormField, FormLabel, TextInput } from "../utrecht";
import { FormFieldState } from "./model";
import { ValidationMessages } from "../ValidationMessages";

interface InputProps {
  field: FormFieldState;
}

export const Input = ({
  field: {
    labelKey,
    id,
    name,
    required,
    definition: { autoComplete, spellCheck, numeric, maxLength, minLength, pattern },
    inputState: { invalid, errors, value },
  },
}: InputProps) => {
  const { t } = useTranslation("form");

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(labelKey)}</FormLabel>
      <TextInput
        id={`${id}-input`}
        name={name}
        value={value}
        autoComplete={`${autoComplete}`}
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") : undefined}
        aria-invalid={invalid}
        spellCheck={spellCheck}
        inputMode={numeric ? "numeric" : undefined}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        required={required}
      />
      <ValidationMessages errors={errors} />
    </FormField>
  );
};
