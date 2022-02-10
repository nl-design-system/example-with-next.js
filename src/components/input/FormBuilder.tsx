import { useReducer, FormEvent, FocusEvent, ChangeEvent } from "react";
import { FormState, FormValidationError, FormFieldDeclaration, FormFieldState } from "./model";
import { Input } from "./Input";
import { Alert } from "../Alert";
import { Button } from "../utrecht";
import { ValidationMessages } from "../ValidationMessages";
import {
  formEnableRequiredValidation,
  formFieldEnableValidation,
  resetForm,
  createFieldState,
  setField,
  getFormState,
  formCheckValidity,
  normalizerField,
} from "./controller";

type SubmitFunction = () => Promise<any>;

interface FormBuilderProps {
  fields: FormFieldDeclaration[];
  customSubmit?: SubmitFunction;
  t: (key: string) => string;
}

interface SubmitError {
  id: string;
  message: string;
}

interface State {
  form: FormState;
  fields: FormFieldState[];
  submit: {
    busy: boolean;
    errors: SubmitError[];
    validationErrors: FormValidationError[];
  };
}

interface ChangeAction {
  type: "change";
  id: string;
  value: string;
}
interface ResetAction {
  type: "reset";
}
interface SubmitAction {
  type: "submit";
}
interface SubmitFailureAction {
  type: "submit-failure";
}
interface SubmitSuccessAction {
  type: "submit-success";
}

interface TouchInputAction {
  type: "touch-input";
  id: string;
}

type Action = ChangeAction | ResetAction | SubmitAction | SubmitFailureAction | SubmitSuccessAction | TouchInputAction;

type FormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const FormBuilder = ({ fields, customSubmit, t }: FormBuilderProps) => {
  const fieldsState = fields.map((field) => createFieldState(field));
  console.log({ fieldsState });
  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      let newState = state;
      if (action.type === "change") {
        const fields = setField(state.fields, action.id, action.value);
        newState = {
          ...newState,
          fields,
        };
      } else if (action.type === "reset") {
        newState = {
          ...newState,
          fields: resetForm(fieldsState),
        };
      } else if (action.type === "touch-input") {
        newState = {
          ...newState,
          fields: formFieldEnableValidation(newState.fields, action.id),
        };
      } else if (action.type === "submit") {
        newState = {
          ...newState,
          fields: formEnableRequiredValidation(newState.fields),
        };
        newState = {
          ...newState,
          fields: newState.fields.map((field) => {
            if (field.required && !field.inputState.value) {
              // First only show the required error, only validate after that
              return {
                ...field,
                inputState: {
                  ...field.inputState,
                  deferInvalid: true,
                },
              };
            } else {
              return {
                ...field,
                inputState: {
                  ...field.inputState,
                  deferInvalid: false,
                  deferTooShort: false,
                  deferTooLong: false,
                  deferValueMissing: false,
                  deferPatternMismatch: false,
                },
              };
            }
          }),
        };

        // Normalize before validation
        newState = {
          ...newState,
          fields: newState.fields.map(normalizerField),
        };

        newState = {
          ...newState,
          fields: formCheckValidity(newState.fields),
        };

        if (state.form.invalid) {
          // In addition to errors at form field level,
          // display an error for the form as a whole.
          newState = {
            ...newState,
            submit: {
              ...state.submit,
              validationErrors: [
                {
                  id: "ac152ea0-efaa-4d2e-bc6e-13baafba7f9a",
                  message: "Cannot submit form until all fields are correct.",
                },
              ],
            },
          };
        } else {
          // In addition to validation errors,
          // display errors that relate to the submission process.
          // Some errors might be recoverable (HTTP status 500, server has issues, but likely temporarily)
          // and warrant a retry.
          newState = {
            ...newState,
            submit: {
              ...state.submit,
              busy: true,
              errors: [],
            },
          };
        }
      }

      newState = {
        ...newState,
        form: getFormState(newState.fields),
      };

      return newState;
    },
    {
      fields: fieldsState,
      form: getFormState(fieldsState),
      submit: {
        busy: false,
        errors: [],
        validationErrors: [],
      },
    }
  );
  // const [fieldsState, setFieldsState] = useState(fields.map((field) => createFieldState(field)));

  // const handleReset = (event: FormEvent) => {
  //   event.preventDefault();
  //   setFieldsState(fieldsState.map((field) => resetField(field)));
  // };

  const handleReset = (_: FormEvent) => {
    dispatch({ type: "reset" });
  };

  const handleSubmit = (event: FormEvent) => {
    if (customSubmit) {
      event.preventDefault();
    }

    if (state.form.invalid) {
      event.preventDefault();
      dispatch({ type: "submit" });
    } else {
      dispatch({ type: "submit" });
    }
  };

  const handleInputBlur = (event: FocusEvent<FormControl>) => {
    dispatch({
      type: "touch-input",
      id: event.target.dataset.id || "",
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.dataset.id === "string") {
      dispatch({
        type: "change",
        id: event.target.dataset.id,
        value: event.target.value,
      });
    }
  };

  return (
    <>
      <form onReset={handleReset} onSubmit={handleSubmit} method="POST">
        {state.fields.map((field) => (
          <Input
            t={t}
            key={field.id}
            state={field}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onInput={handleInputChange}
          />
        ))}
        <Button type="reset" disabled={!state.form.dirty} onClick={handleReset}>
          {t("reset")}
        </Button>
        <Button
          type="submit"
          aria-disabled={state.form.invalid}
          busy={state.submit.busy}
          onClick={handleSubmit}
          aria-describedby={state.submit.validationErrors.map(({ id }) => id).join(" ") || undefined}
        >
          {t("submit")}
        </Button>
        {state.submit.errors.map(({ id, message }) => (
          <Alert key={id}>
            <p>Error: {message}</p>
          </Alert>
        ))}
        <ValidationMessages errors={state.submit.validationErrors} />
      </form>
    </>
  );
};
