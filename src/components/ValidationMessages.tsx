import { FormFieldDescription, Paragraph } from "./utrecht";

export interface ValidationError {
  id: string;
  message: string;
}

interface ValidationMessagesProps {
  errors?: ValidationError[];
}

export const def = {
  label: "house-number",
  autoComplete: "house-number",
  numeric: true,
};

export const ValidationMessages = ({ errors }: ValidationMessagesProps) => {
  return (
    <>
      {errors &&
        errors.map(({ id, message }) => (
          <FormFieldDescription id={id} key={id} invalid>
            <Paragraph>{message}</Paragraph>
          </FormFieldDescription>
        ))}
    </>
  );
};
