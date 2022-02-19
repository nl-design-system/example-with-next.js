import { ValidationError } from './ValidationError.model';

export interface PatternMismatch extends ValidationError {
  name: 'PatternMismatchError';
  patternMismatch: true;
}
