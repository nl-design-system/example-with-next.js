import { FormValidationError } from "../form/error/FormValidationError.model";
import { FormFieldDescription, Paragraph } from "./utrecht";

interface ValidationMessagesProps {
  errors?: (FormValidationError & { id?: string })[]; // TODO: Remove `id` hack
  t?: (_key: string) => string;
}

export const ValidationMessages = ({ errors, t = (str) => str }: ValidationMessagesProps) => {
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
