import { ValidationError } from './ValidationError.model';

export interface RangeUnderflow extends ValidationError {
  name: 'RangeUnderflowError';
  rangeUnderflow: true;
  data?: {
    min: number;
    value: number;
  };
}
