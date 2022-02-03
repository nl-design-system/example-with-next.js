import { FormFieldDefinition, FormValidationFunction, FormValidationError } from "../../components/input/model";

export const createValidators = (def: FormFieldDefinition): FormValidationFunction[] => {
  const validators: FormValidationFunction[] = [];
  if (typeof def.maxLength === "number") {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.maxLength === "number" && value.length > def.maxLength) {
        return [
          {
            id: "3c1ac06c-80f0-41fc-ad37-7637ebd2e1ce",
            message: "invalid-max-length",
          },
        ];
      } else {
        return [];
      }
    });
  }
  if (typeof def.minLength === "number") {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.minLength === "number" && value.length < def.minLength) {
        return [
          {
            id: "2ea07f70-e269-477a-91d7-9ea3f24a0aa3",
            message: "invalid-min-length",
          },
        ];
      } else {
        return [];
      }
    });
  }
  if (typeof def.pattern === "string") {
    validators.push((value: string): FormValidationError[] => {
      if (typeof def.pattern === "string" && !new RegExp("^(?:" + def.pattern + ")$").test(value)) {
        return [
          {
            id: "3249dd09-baa8-498e-9709-af3062737f50",
            message: "invalid-pattern",
          },
        ];
      } else {
        return [];
      }
    });
  }
  return validators;
};
