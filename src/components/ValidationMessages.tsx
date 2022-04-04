import { useTranslation } from "react-i18next";
import { FormValidationError } from "../form/error/FormValidationError.model";
import { FormFieldDescription, Paragraph } from "./utrecht";
import { FormField } from "../form/state/FormField.model";

interface ValidationMessagesProps {
  errors?: (FormValidationError & { id?: string })[]; // TODO: Remove `id` hack
  field: FormField;
}

export const ValidationMessages = ({ errors, field }: ValidationMessagesProps) => {
  const { t } = useTranslation(["form-error"]);
  return (
    <>
      {errors &&
        errors.map(({ id, name, message }) => (
          <FormFieldDescription id={id} key={message} invalid>
            <Paragraph>
              {t(name, {
                label: field.declaration.labelKey ? t(field.declaration.labelKey) : field.declaration.label,
                minLength: field.definition.minLength,
                maxLength: field.definition.maxLength,
                min: field.definition.min,
                max: field.definition.max,
                step: field.definition.step,
                pattern: field.definition.pattern,
              })}
            </Paragraph>
          </FormFieldDescription>
        ))}
    </>
  );
};
