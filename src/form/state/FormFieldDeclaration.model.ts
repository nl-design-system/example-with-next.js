export interface FormFieldDeclaration {
  fieldType?: 'checkbox' | 'checkboxgroup' | 'date' | 'datetime' | 'input' | 'radiogroup' | 'select' | 'time';
  id: string;
  inputSubtype?: 'text' | 'email' | 'number' | 'range';
  labelKey?: string;
  label: string;
  name?: string;
  // TODO:
  // normalizers?: FormNormalizeFunction[];
  // validators?: FormValidationFunction[];
}
