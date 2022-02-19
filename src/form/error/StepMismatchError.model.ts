import { ValidationError } from './ValidationError.model';

export interface StepMismatch extends ValidationError {
  name: 'StepMismatchError';
  stepMismatch: true;
}
