import { FormField, FormLabel, TextInput, Checkbox, Fieldset, FieldsetLegend, RadioButton } from "../utrecht";
import { FormFieldState, FormFieldOption } from "./model";
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
    disabled,
    noscript,
    fieldType,
    inputSubtype,
    definition: { autoComplete, spellCheck, numeric, maxLength, minLength, pattern, min, max, step, options },
    defaultState,
    inputState,
  } = state;
  const { invalid, errors, value } = inputState;
  const formControlId = `${id}-input`;

  if (fieldType === "radiogroup" || fieldType === "checkboxgroup") {
    return (
      <Fieldset role={fieldType === "radiogroup" ? "radiogroup" : undefined}>
        <FieldsetLegend>{t(labelKey)}</FieldsetLegend>
        {options &&
          options.map((option: FormFieldOption) => {
            const { label, labelKey, value } = option;
            const optionControlId = `${option.id}-input`;
            const optionDisabled = option.disabled || disabled || false;
            if (fieldType === "checkboxgroup") {
              return (
                <FormField id={option.id} key={option.id}>
                  <Checkbox
                    aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
                    checked={!!inputState?.selectedOptions?.includes(option.id)}
                    data-id={id}
                    data-option-id={option.id}
                    disabled={optionDisabled}
                    id={optionControlId}
                    invalid={invalid}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    // onInput={onInput}
                    required={noscript ? required : false}
                    value={value}
                  />
                  <FormLabel htmlFor={optionControlId} disabled={optionDisabled}>
                    {labelKey ? t(labelKey) : label}
                  </FormLabel>
                </FormField>
              );
            } else if (fieldType === "radiogroup") {
              return (
                <FormField id={option.id} key={option.id}>
                  <RadioButton
                    aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
                    checked={!!inputState?.selectedOptions?.includes(option.id)}
                    data-id={id}
                    data-option-id={option.id}
                    disabled={optionDisabled}
                    id={optionControlId}
                    invalid={invalid}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    // onInput={onInput}
                    required={noscript ? required : false}
                    value={value}
                  />
                  <FormLabel htmlFor={optionControlId} disabled={optionDisabled}>
                    {labelKey ? t(labelKey) : label}
                  </FormLabel>
                </FormField>
              );
            }
            return null;
          })}
      </Fieldset>
    );
  }

  return (
    <FormField id={id}>
      <FormLabel htmlFor={`${id}-input`} disabled={disabled}>
        {t(labelKey)}
      </FormLabel>
      {fieldType === "input" ? (
        <TextInput
          aria-describedby={
            Array.isArray(errors) && errors.length > 0 ? errors.map(({ id }) => id).join(" ") : undefined
          }
          invalid={invalid}
          autoComplete={Array.isArray(autoComplete) ? autoComplete.join(" ") : autoComplete}
          id={formControlId}
          data-id={id}
          inputMode={numeric ? "numeric" : undefined}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          min={noscript || inputSubtype === "range" ? min : undefined}
          max={noscript || inputSubtype === "range" ? max : undefined}
          step={noscript || inputSubtype === "range" ? step : undefined}
          name={name}
          pattern={noscript ? pattern : undefined}
          required={noscript ? required : false}
          aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
          spellCheck={spellCheck}
          value={(inputState ? value : defaultState?.value) || undefined}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
          type={inputSubtype}
        />
      ) : fieldType === "checkbox" ? (
        <Checkbox
          aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
          checked={!!inputState?.value}
          data-id={id}
          disabled={disabled}
          id={formControlId}
          invalid={invalid}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onInput={onInput}
          required={noscript ? required : false}
          value={defaultState?.value}
        />
      ) : fieldType === "select" ? (
        <select>
          {options.map((option: FormFieldOption) => {
            const { disabled, label, labelKey, value } = option;
            return (
              <option key={option.id} disabled={disabled} value={value} data-option-id={option.id}>
                {labelKey ? t(labelKey) : label}
              </option>
            );
          })}
        </select>
      ) : (
        ""
      )}
      <ValidationMessages errors={errors} t={t} />
      {/*{<InputInspector state={state} />}*/}
    </FormField>
  );
};
