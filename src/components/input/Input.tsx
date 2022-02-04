import { useTranslation } from "next-i18next";
import { FormField, FormLabel, TextInput } from "../utrecht";
import { FormFieldState } from "./model";
import { ValidationMessages } from "../ValidationMessages";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  field: FormFieldState;
}

export const Input = ({
  field: {
    labelKey,
    id,
    name,
    required,
    definition: { autoComplete, spellCheck, numeric, maxLength, minLength, pattern },
    defaultState,
    inputState,
  },
  onChange,
  onBlur,
  onInput,
}: InputProps) => {
  const { t } = useTranslation("form");
  const { invalid, errors, value } = inputState;

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(labelKey)}</FormLabel>
      <TextInput
        aria-describedby={Array.isArray(errors) && errors.length > 0 ? errors.map(({ id }) => id).join(" ") : undefined}
        aria-invalid={invalid}
        autoComplete={Array.isArray(autoComplete) ? autoComplete.join(" ") : autoComplete}
        id={`${id}-input`}
        data-id={id}
        inputMode={numeric ? "numeric" : undefined}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={pattern}
        required={required}
        spellCheck={spellCheck}
        value={(inputState ? value : defaultState?.value) || undefined}
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
      />
      <ValidationMessages errors={errors} />
    </FormField>
  );
};
