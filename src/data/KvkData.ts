import { FormFieldDefinition } from '../components/input/model';
import { createDefinition } from './create';

export const kvkValidation: FormFieldDefinition = createDefinition({
  maxLength: 8,
  minLength: 8,
  integer: true,
  pattern: '[0-9]{8}',
});
