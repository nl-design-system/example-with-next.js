import { createSubmitState } from './FormSubmitState';

describe('Form submit action state', () => {
  describe('busy', () => {
    it('is initially not busy', () => {
      const submit = createSubmitState({});

      expect(submit.busy).toBe(false);
    });

    it('can be busy (while submission is in progress)', () => {
      const busy = true;
      const submit = createSubmitState({
        busy,
      });

      expect(submit.busy).toBe(busy);
    });
  });

  describe('disabled', () => {
    it('is initially not disabled', () => {
      const submit = createSubmitState({});

      expect(submit.disabled).toBe(false);
    });

    it('can be disabled (when submission is in progress, or when form has no changes)', () => {
      const disabled = true;
      const submit = createSubmitState({
        disabled,
      });

      expect(submit.disabled).toBe(disabled);
    });
  });

  describe('errors in submission handling', () => {
    it('has no errors initially', () => {
      const submit = createSubmitState({});

      expect(submit.errors).toStrictEqual([]);
    });

    it('can have errors when submission process was not succesful', () => {
      const error = new Error('500 Internal Server Error');
      const submit = createSubmitState({ errors: [error] });

      expect(submit.errors).toStrictEqual([error]);
    });
  });

  describe('validation errors', () => {
    it('has no validation errors initially', () => {
      const submit = createSubmitState({});

      expect(submit.validityErrors).toStrictEqual([]);
    });

    it('can have validation errors for the overall state of the form', () => {
      const error = new Error('Not all required field have been filled out. Please complete the form.');
      const submit = createSubmitState({ validityErrors: [error] });

      expect(submit.validityErrors).toStrictEqual([error]);
    });
  });
});
