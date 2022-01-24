import { InputHTMLAttributes } from "react";
import { FormLabel, FormField, Fieldset, FieldsetLegend, RadioButton } from "../utrecht";
import { useTranslation } from "next-i18next";
import { ValidationError, ValidationMessages } from "../ValidationMessages";

interface InputGenderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  required?: boolean;
  id: string;
  name?: string;
  invalid?: boolean;
  errors?: ValidationError[];
}

type Option = { label: string; value: string };

export const InputGender = ({ id, name, onChange, required, invalid, value, errors }: InputGenderProps) => {
  const { t } = useTranslation("form");

  const def: { label: string; type: string; options: Option[] } = {
    label: "gender",
    type: "radio",
    options: [
      {
        label: t("gender-female"),
        value: "female",
      },
      {
        label: t("gender-male"),
        value: "male",
      },
      {
        label: t("gender-unknown"),
        value: "unknown",
      },
    ],
  };

  const groupName = name || id;
  const errorIds = errors ? errors.map(({ id }) => id).join(" ") : undefined;

  return (
    <>
      <Fieldset id={id} aria-required={required} aria-invalid={invalid}>
        <FieldsetLegend>{t(def.label)}</FieldsetLegend>
        {def.options.map((option, index) => {
          const optionId = `${id}-option-${index}`;

          return (
            <FormField key={optionId}>
              <FormLabel type="radio" htmlFor={optionId}>
                {option.label}
              </FormLabel>
              <RadioButton
                id={optionId}
                name={groupName}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                aria-describedby={errorIds}
              />
            </FormField>
          );
        })}
        <ValidationMessages errors={errors}></ValidationMessages>
      </Fieldset>
    </>
  );
};
