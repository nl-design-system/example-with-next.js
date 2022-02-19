import { RangeUnderflow } from './RangeUnderflowError.model';

export function RangeUnderflowError(message: string, data?: { min: number; value: number }): RangeUnderflow {
  return {
    data,
    message,
    name: 'RangeUnderflowError',
    rangeUnderflow: true,
  };
}
