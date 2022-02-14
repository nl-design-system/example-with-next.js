import { FormFieldDefinition } from '../components/input/model';

export const createDefinition = (def: FormFieldDefinition): FormFieldDefinition => {
  if (def.integer) {
    def = {
      ...def,
      numeric: true,
    };
  }

  if (def.numeric) {
    def = {
      spellCheck: false,
      ...def,
    };
  }
  return def;
};
