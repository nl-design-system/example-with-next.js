export const MIN_LENGTH_ERROR_ID = '2ea07f70-e269-477a-91d7-9ea3f24a0aa3';

export function MinLengthError() {
  return {
    id: MIN_LENGTH_ERROR_ID,
    message: 'invalid-min-length',
  };
}
