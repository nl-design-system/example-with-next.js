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
    defaultState,
    inputState,
  },
}: InputProps) => {
  const { t } = useTranslation("form");
  const { invalid, errors, value } = inputState;

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(labelKey)}</FormLabel>
      <TextInput
        aria-describedby={errors ? errors.map(({ id }) => id).join(" ") || undefined : undefined}
        aria-invalid={invalid}
        autoComplete={Array.isArray(autoComplete) ? autoComplete.join(" ") : autoComplete}
        id={`${id}-input`}
        inputMode={numeric ? "numeric" : undefined}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={pattern}
        required={required}
        spellCheck={spellCheck}
        defaultValue={inputState ? inputState.value : defaultState?.value}
        value={value || undefined}
      />
      <ValidationMessages errors={errors} />
    </FormField>
  );
};
