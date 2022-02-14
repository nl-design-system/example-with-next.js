import { RangeOverflow } from './model';

export const PATTERN_ERROR_ID = '06b9ecd1-4a70-467d-8962-f2541ebf24ff';

export function RangeOverflowError<T>({ max, value }: { max: T; value: T }): RangeOverflow<T> {
  return {
    id: PATTERN_ERROR_ID,
    message: 'invalid-range-overflow',
    rangeOverflow: true,
    data: {
      max,
      value,
    },
  };
}
