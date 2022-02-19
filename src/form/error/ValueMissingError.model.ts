import { ValidationError } from './ValidationError.model';

export interface ValueMissing extends ValidationError {
  name: 'ValueMissingError';
  valueMissing: true;
}
