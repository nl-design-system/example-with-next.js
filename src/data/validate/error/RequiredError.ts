export const REQUIRED_ERROR_ID = 'ac5e6569-5fd1-4c37-bd80-13bd1835f002';

export function RequiredError() {
  return {
    id: REQUIRED_ERROR_ID,
    message: 'This field is required. Please provide a value.',
  };
}
