import { useTranslation } from "react-i18next";
import { FormValidationError } from "../form/error/FormValidationError.model";
import { FormFieldDescription, Paragraph } from "./utrecht";

interface ValidationMessagesProps {
  errors?: (FormValidationError & { id?: string })[]; // TODO: Remove `id` hack
}

export const ValidationMessages = ({ errors }: ValidationMessagesProps) => {
  const { t } = useTranslation(["form-error"]);
  return (
    <>
      {errors &&
        errors.map(({ id, name, message }) => (
          <FormFieldDescription id={id} key={message} invalid>
            <Paragraph>{t(name)}</Paragraph>
          </FormFieldDescription>
        ))}
    </>
  );
};
