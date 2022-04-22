import { useTranslation } from "react-i18next";
import { FormValidationError } from "../form/error/FormValidationError.model";
import { FormField } from "../form/state/FormField.model";
import { FormFieldDescription, Paragraph } from "./index";

interface ValidationMessagesProps {
  errors?: (FormValidationError & { id?: string })[]; // TODO: Remove `id` hack
  field: FormField;
}

export const ValidationMessages = ({
  errors,
  field: {
    declaration: { label, labelKey },
    definition: { min, minLength, max, maxLength },
  },
}: ValidationMessagesProps) => {
  const { t } = useTranslation(["form-error", "form"]);
  return (
    <>
      {errors &&
        errors.map(({ id, name, message }) => {
          return (
            <FormFieldDescription id={id} key={message} invalid>
              <Paragraph>
                {t(name, {
                  ns: "form-error",
                  context: labelKey,
                  label: t([labelKey, label], { ns: "form" }).toLowerCase(),
                  min,
                  minLength,
                  max,
                  maxLength,
                })}
              </Paragraph>
            </FormFieldDescription>
          );
        })}
    </>
  );
};
