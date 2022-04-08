import { createFormField } from '../state/FormField';
import { FormResetAction } from './FormResetAction.model';
import { FormSubmitAction } from './FormSubmitAction.model';
import { FormSubmitFailureAction } from './FormSubmitFailureAction.model';
import { FormSubmitSuccessAction } from './FormSubmitSuccessAction.model';
import { InputChangeAction } from './InputChangeAction.model';
import { createInitialFormState, formReducer } from './reducer';

describe('Form state', () => {
  it('is initially not dirty', () => {
    const initialState = createInitialFormState({
      fields: [],
    });

    expect(initialState.form.dirty).toBe(false);
  });
});

describe('Form reducer', () => {
  const emptyForm = {
    fields: [],
  };

  const form = {
    fields: [
      createFormField({
        declaration: {
          id: 'answer-to-life-the-universe-and-everything',
          fieldType: 'input',
          label: 'The answer to life, the universe and everything?',
          labelKey: 'ultimate-question',
        },
      }),
    ],
  };

  describe('action to change form field value', () => {
    describe('form field', () => {
      it('is dirty after any change', () => {
        const initialState = createInitialFormState(form);
        const changeAction: InputChangeAction = {
          type: 'change',
          id: 'answer-to-life-the-universe-and-everything',
          value: '42',
        };
        const newState = formReducer(initialState, changeAction);

        expect(newState.form.dirty).toBe(true);
      });

      it('contains dirty form field after a change', () => {
        const initialState = createInitialFormState(form);
        const changeAction: InputChangeAction = {
          type: 'change',
          id: 'answer-to-life-the-universe-and-everything',
          value: '42',
        };
        const newState = formReducer(initialState, changeAction);

        expect(newState.fields[0].inputState.dirty).toBe(true);
      });

      it('is not dirty after an invalid change', () => {
        const initialState = createInitialFormState(emptyForm);
        const changeAction: InputChangeAction = {
          type: 'change',
          id: 'answer-to-life-the-universe-and-everything',
          value: '42',
        };
        const newState = formReducer(initialState, changeAction);

        expect(newState.form.dirty).toBe(false);
      });
    });
  });

  describe('action to reset form to initial state', () => {
    it('form and form field should not be dirty after reset', () => {
      const initialState = createInitialFormState(form);
      const changeAction: InputChangeAction = {
        type: 'change',
        id: 'answer-to-life-the-universe-and-everything',
        value: '42',
      };
      const resetAction: FormResetAction = {
        type: 'reset',
      };
      let newState = formReducer(initialState, changeAction);

      expect(newState.form.dirty).toBe(true);
      expect(newState.fields[0]?.inputState.dirty).toBe(true);

      newState = formReducer(newState, resetAction);

      expect(newState.form.dirty).toBe(false);
      expect(newState.fields[0]?.inputState.dirty).toBe(false);
    });

    it('form field should have original state after reset', () => {
      const defaultState = {
        errors: [{ name: 'Error', message: 'Give it some more thought!' }],
        invalid: true,
        value: '37',
      };

      const initialState = createInitialFormState({
        fields: [
          createFormField({
            declaration: {
              id: 'answer-to-life-the-universe-and-everything',
              fieldType: 'input',
              label: 'The answer to life, the universe and everything?',
              labelKey: 'ultimate-question',
            },
            defaultState,
            definition: {
              min: 42,
              max: 42,
            },
          }),
        ],
      });
      const changeAction: InputChangeAction = {
        type: 'change',
        id: 'answer-to-life-the-universe-and-everything',
        value: '42',
      };
      const resetAction: FormResetAction = {
        type: 'reset',
      };

      expect(initialState.form.invalid).toStrictEqual(true);

      let newState = formReducer(initialState, changeAction);

      expect(newState.fields[0]?.inputState.errors).toStrictEqual([]);
      expect(newState.fields[0]?.inputState.invalid).toBe(false);
      expect(newState.fields[0]?.inputState.value).toStrictEqual('42');
      expect(newState.form.invalid).toStrictEqual(false);

      newState = formReducer(newState, resetAction);

      expect(newState.fields[0]?.inputState.errors).toStrictEqual(defaultState.errors);
      expect(newState.fields[0]?.inputState.invalid).toBe(defaultState.invalid);
      expect(newState.fields[0]?.inputState.value).toStrictEqual(defaultState.value);
      expect(newState.form.invalid).toStrictEqual(true);
    });
  });

  describe('submit', () => {
    describe('submit action', () => {
      it('can submit the form', () => {
        const initialState = createInitialFormState({
          fields: [],
        });
        const submitAction: FormSubmitAction = {
          type: 'submit',
        };
        const newState = formReducer(initialState, submitAction);

        expect(newState).not.toBe(initialState);
      });

      it('submit is initially not busy', () => {
        const initialState = createInitialFormState({
          fields: [],
        });

        expect(initialState.submit.busy).toBe(false);
      });

      it('after submit the form submit is busy', () => {
        const initialState = createInitialFormState({
          fields: [],
        });
        const submitAction: FormSubmitAction = {
          type: 'submit',
        };
        const newState = formReducer(initialState, submitAction);

        expect(newState.submit.busy).toBe(true);
      });

      describe('submit success', () => {
        it('after submit success the form submit is not busy anymore', () => {
          const submitAction: FormSubmitAction = {
            type: 'submit',
          };
          const successAction: FormSubmitSuccessAction = {
            type: 'submit-success',
          };
          const initialState = createInitialFormState({
            fields: [],
          });
          let newState = formReducer(initialState, submitAction);
          newState = formReducer(newState, successAction);

          expect(newState.submit.busy).toBe(false);
        });
      });

      describe('submit failure', () => {
        it('after submit failure the form submit is not busy anymore', () => {
          const submitAction: FormSubmitAction = {
            type: 'submit',
          };
          const successAction: FormSubmitFailureAction = {
            type: 'submit-failure',
          };
          const initialState = createInitialFormState({
            fields: [],
          });
          let newState = formReducer(initialState, submitAction);
          newState = formReducer(newState, successAction);

          expect(newState.submit.busy).toBe(false);
        });
      });
    });
  });
});
