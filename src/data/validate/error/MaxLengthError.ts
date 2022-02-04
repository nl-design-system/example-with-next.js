export const MAX_LENGTH_ERROR_ID = '3c1ac06c-80f0-41fc-ad37-7637ebd2e1ce';

export function MaxLengthError() {
  return {
    id: MAX_LENGTH_ERROR_ID,
    message: 'invalid-max-length',
  };
}
