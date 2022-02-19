import { RangeOverflow } from './RangeOverflowError.model';

export function RangeOverflowError(message: string, data?: { max: number; value: number }): RangeOverflow {
  return {
    data,
    name: 'RangeOverflowError',
    message,
    rangeOverflow: true,
  };
}
