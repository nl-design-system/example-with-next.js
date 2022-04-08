/**
 * Option, for example in radio group, checkbox group, listbox or
 * even for autocomplete options in <datalist>
 */
export interface FormFieldOption {
  id: string;
  label: string;
  labelKey: string;
  value?: string;
}
