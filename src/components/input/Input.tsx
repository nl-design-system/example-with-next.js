import { FormField, FormLabel, TextInput } from "../utrecht";
import { FormFieldState } from "./model";
import { ValidationMessages } from "../ValidationMessages";
import { InputHTMLAttributes } from "react";
// import { InputInspector } from "./InputInspector";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  state: FormFieldState;
  t: (key: string) => string;
}

export const Input = ({ state, onChange, onBlur, onInput, t }: InputProps) => {
  const {
    labelKey,
    id,
    name,
    required,
    noscript,
    definition: { autoComplete, spellCheck, numeric, maxLength, minLength, pattern },
    defaultState,
    inputState,
  } = state;
  const { invalid, errors, value } = inputState;

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`}>{t(labelKey)}</FormLabel>
      <TextInput
        aria-describedby={Array.isArray(errors) && errors.length > 0 ? errors.map(({ id }) => id).join(" ") : undefined}
        invalid={invalid}
        autoComplete={Array.isArray(autoComplete) ? autoComplete.join(" ") : autoComplete}
        id={`${id}-input`}
        data-id={id}
        inputMode={numeric ? "numeric" : undefined}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={noscript ? pattern : undefined}
        required={noscript ? required : false}
        aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
        spellCheck={spellCheck}
        value={(inputState ? value : defaultState?.value) || undefined}
        onChange={onChange}
        onInput={onInput}
        onBlur={onBlur}
      />
      <ValidationMessages errors={errors} t={t} />
      {/*<InputInspector state={state} />*/}
    </FormField>
  );
};
