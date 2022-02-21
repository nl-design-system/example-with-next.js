import { FormField } from './FormField.model';

export const hasOption = (field: FormField, optionId: string) =>
  field.definition.options?.find((option) => option.id === optionId);

export const hasSelectedOption = (field: FormField, optionId: string) =>
  field.inputState.selectedOptions?.includes(optionId);

export const selectOption = (field: FormField, optionId: string): FormField => {
  if (hasOption(field, optionId)) {
    // For radio groups the maximum number of selected options is 1.
    // Selecting another option discards any currently selected option.
    //
    // For checkbox groups the existing selection remains.
    // It is important to keep the selected options unique.
    // No option can be selected more than once.

    const baseOptions =
      field.declaration.fieldType === 'radiogroup'
        ? []
        : (field.inputState.selectedOptions || []).filter((selectedId) => selectedId !== optionId);

    return {
      ...field,
      inputState: {
        ...field.inputState,
        dirty: true,
        selectedOptions: [...baseOptions, optionId],
      },
    };
  }
  // TODO: How to communicate failure?
  return field;
};

export const unselectOption = (field: FormField, optionId: string): FormField => {
  if (hasOption(field, optionId)) {
    return {
      ...field,
      inputState: {
        ...field.inputState,
        selectedOptions: (field.inputState.selectedOptions || []).filter((selectedId) => selectedId !== optionId),
      },
    };
  }
  return field;
};

export const formSelectOption = (fields: FormField[], fieldId: string, optionId: string): FormField[] =>
  fields.map((field) => {
    if (field.declaration.id === fieldId && Array.isArray(field.definition.options)) {
      return selectOption(field, optionId);
    }
    return field;
  });

export const formUnselectOption = (fields: FormField[], fieldId: string, optionId: string): FormField[] =>
  fields.map((field) => {
    if (field.declaration.id === fieldId && Array.isArray(field.definition.options)) {
      return unselectOption(field, optionId);
    }
    return field;
  });
