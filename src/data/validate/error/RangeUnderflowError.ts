import { RangeUnderflow } from './model';

export const PATTERN_ERROR_ID = 'be312f76-2b41-4db4-b342-e41cd827bc9d';

export function RangeUnderflowError<T>({ min, value }: { min: T; value: T }): RangeUnderflow<T> {
  return {
    id: PATTERN_ERROR_ID,
    message: 'invalid-range-underflow',
    rangeUnderflow: true,
    data: {
      min,
      value,
    },
  };
}
