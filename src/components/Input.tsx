import { InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { FormField as FormFieldState } from "../form/state/FormField.model";
import { FormFieldOption } from "../form/state/FormFieldOption.model";
import { ValidationMessages } from "./ValidationMessages";
import {
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  RadioButton,
  Select,
  SelectOption,
  Textarea,
  Textbox,
} from "./utrecht";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  state: FormFieldState;
  // t: (..._args: (string | undefined)[]) => string;
}

export const Input = ({ state, onChange, onBlur, onInput, className }: InputProps) => {
  const {
    declaration: { label, labelKey, id, name, fieldType, inputSubtype },
    definition: { autoComplete, spellCheck, numeric, maxLength, minLength, pattern, min, max, step, options, required },
    defaultState,
    inputState,
  } = state;
  const { t } = useTranslation(["form-error", "form", "common"]);
  const { invalid, errors, value } = inputState;
  const formControlId = `${id}-input`;
  const noscript = false;
  const disabled = false;

  const errorMessageIds =
    Array.isArray(errors) && errors.length > 0 ? errors.map((_, index) => `${id}-error-${index}`).join(" ") : undefined;

  if (fieldType === "radiogroup" || fieldType === "checkboxgroup") {
    return (
      <Fieldset role={fieldType === "radiogroup" ? "radiogroup" : undefined} className={className}>
        <FieldsetLegend>{labelKey ? t(labelKey, label) : label}</FieldsetLegend>
        {options &&
          options.map((option: FormFieldOption) => {
            const { label, labelKey, value } = option;
            const optionControlId = `${option.id}-input`;
            // TODO: Support `option.disabled || disabled || false`
            const optionDisabled = disabled || false;
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
                  <FormLabel htmlFor={optionControlId} disabled={optionDisabled} type="checkbox">
                    {labelKey ? t(labelKey, label) : label}
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
                  <FormLabel htmlFor={optionControlId} disabled={optionDisabled} type="radio">
                    {labelKey ? t(labelKey, label) : label}
                  </FormLabel>
                </FormField>
              );
            }
            return null;
          })}
      </Fieldset>
    );
  }

  if (fieldType === "checkbox") {
    return (
      <FormField id={id} className={className}>
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
        <FormLabel htmlFor={`${id}-input`} disabled={disabled} type="checkbox">
          {labelKey ? t(labelKey, label) : label}
        </FormLabel>
      </FormField>
    );
  }

  return (
    <FormField id={id} className={className}>
      <FormLabel htmlFor={`${id}-input`} disabled={disabled}>
        {labelKey ? t(labelKey, label) : label}
      </FormLabel>
      {fieldType === "input" && inputSubtype !== "range" ? (
        <Textbox
          aria-describedby={errorMessageIds}
          invalid={invalid}
          autoComplete={Array.isArray(autoComplete) ? autoComplete.join(" ") : autoComplete}
          id={formControlId}
          data-id={id}
          inputMode={numeric ? "numeric" : undefined}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          // TODO: Support 'range'
          // min={noscript || inputSubtype === "range" ? min : undefined}
          // max={noscript || inputSubtype === "range" ? max : undefined}
          // step={noscript || inputSubtype === "range" ? step : undefined}
          min={noscript ? min : undefined}
          max={noscript ? max : undefined}
          step={noscript ? step : undefined}
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
      ) : fieldType === "textarea" ? (
        <Textarea
          aria-describedby={errorMessageIds}
          invalid={invalid}
          id={formControlId}
          data-id={id}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          name={name}
          required={noscript ? required : false}
          aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
          spellCheck={spellCheck}
          value={(inputState ? value : defaultState?.value) || undefined}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
        />
      ) : fieldType === "select" ? (
        <Select
          id={formControlId}
          aria-describedby={errorMessageIds}
          invalid={invalid}
          data-id={id}
          disabled={disabled}
          name={name}
          required={required}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
        >
          {options &&
            options.map((option: FormFieldOption) => {
              const { label, labelKey, value } = option;
              // TODO: `disabled` state for options
              const disabled = false;
              return (
                <SelectOption key={option.id} disabled={disabled} value={value} data-option-id={option.id}>
                  {labelKey ? t(labelKey, label) : label}
                </SelectOption>
              );
            })}
        </Select>
      ) : (
        ""
      )}
      <ValidationMessages
        errors={errors.map((error, index) => ({
          ...error,
          id: `${id}-error-${index}`,
        }))}
      />
    </FormField>
  );
};
