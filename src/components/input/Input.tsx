import { useTranslation } from "next-i18next";
import { FormField, FormLabel, TextInput } from "../utrecht";
import { FormFieldState } from "./model";
import { ValidationMessages } from "../ValidationMessages";
import { InputHTMLAttributes } from "react";

interface InputDebuggerProps extends InputHTMLAttributes<HTMLInputElement> {
  state: FormFieldState;
}

const InputDebugger = ({
  state: {
    labelKey,
    inputState,
    required,
    definition: { autoComplete, spellCheck, minLength, maxLength, pattern, maskOutput },
  },
}: InputDebuggerProps) => (
  <details>
    <summary>{labelKey} settings</summary>
    <h3>Constraints</h3>
    <dl>
      <dt>required</dt>
      <dd>{required ? "yes" : "no"}</dd>
      <dt>minLength</dt>
      <dd>{typeof minLength == "number" ? minLength : "-"}</dd>
      <dt>maxLength</dt>
      <dd>{typeof maxLength == "number" ? maxLength : "-"}</dd>
      <dt>pattern</dt>
      <dd>{pattern ? pattern : ""}</dd>
    </dl>
    <h3>Input State</h3>
    <dl>
      <dt>current input</dt>
      <dd>{typeof inputState.value == "string" ? inputState.value : ""}</dd>
      <dt>current input length</dt>
      <dd>{typeof inputState.value == "string" ? inputState.value.length : 0}</dd>
    </dl>
    <h3>Data Settings</h3>
    <dl>
      <dt>mask output</dt>
      <dd>{maskOutput ? "yes" : "no"}</dd>
      <dt>spell check</dt>
      <dd>{spellCheck ? "yes" : "no"}</dd>
      <dt>autocomplete</dt>
      <dd>{autoComplete ? autoComplete : "no"}</dd>
    </dl>
    <h3>Validity State</h3>
    <dl>
      <dt>deferred validation</dt>
      <dd>
        <ul>
          {inputState.deferInvalid ? <li>defer invalid</li> : ""}
          {inputState.deferValueMissing ? <li>defer required</li> : ""}
          {inputState.deferTooShort ? <li>defer too short</li> : ""}
          {inputState.deferTooLong ? <li>defer too long</li> : ""}
        </ul>
      </dd>
      <dt>invalid</dt>
      <dd>{inputState.invalid ? "yes" : "no"}</dd>
    </dl>
  </details>
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  state: FormFieldState;
}

export const Input = ({ state, onChange, onBlur, onInput }: InputProps) => {
  const { t } = useTranslation("form");
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
      <ValidationMessages errors={errors} />
      <InputDebugger state={state} />
    </FormField>
  );
};
