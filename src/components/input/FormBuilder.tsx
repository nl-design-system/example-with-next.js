import { FormFieldState } from "./model";
import { Input } from "./Input";

interface FormBuilderProps {
  fields: FormFieldState[];
}

export const FormBuilder = ({ fields }: FormBuilderProps) => (
  <>
    {fields.map((field) => (
      <Input key={field.id} field={field} />
    ))}
  </>
);
