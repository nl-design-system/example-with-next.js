import { ValidationError } from './ValidationError.model';

export interface RangeOverflow extends ValidationError {
  name: 'RangeOverflowError';
  rangeOverflow: true;
  data?: {
    max: number;
    value: number;
  };
}
