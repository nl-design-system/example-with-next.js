import { useState } from "react";
import { FormFieldState } from "./model";
import { Input } from "./Input";
import { createFieldState, setField } from "./controller";

interface FormBuilderProps {
  fields: FormFieldState[];
}

export const FormBuilder = ({ fields }: FormBuilderProps) => {
  const [fieldsState, _] = useState(fields.map((field) => createFieldState(field)));

  // const handleReset = (event: FormEvent) => {
  //   event.preventDefault();
  //   setFieldsState(fieldsState.map((field) => resetField(field)));
  // };

  console.log(fieldsState[0]);

  return (
    <>
      {fieldsState.map((field) => (
        <Input
          key={field.id}
          field={field}
          onChange={(event) => {
            if (typeof event.target.dataset.id === "string") {
              console.log(event.type, event.target.value);
              console.log(setField(fieldsState, event.target.dataset.id, event.target.value));
              _(setField(fieldsState, event.target.dataset.id, event.target.value));
            }
          }}
          onBlur={(event) => {
            console.log(event.type, event.target.value);
          }}
          onInput={(event) => {
            console.log(event.type, event.target.value);
          }}
        />
      ))}
    </>
  );
};
