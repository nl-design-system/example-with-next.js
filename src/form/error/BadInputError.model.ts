import { ValidationError } from './ValidationError.model';

export interface BadInput extends ValidationError {
  name: 'BadInputError';
  badInput: true;
}
