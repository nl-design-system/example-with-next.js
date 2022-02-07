import { useReducer, FormEvent, FocusEvent } from "react";
import { FormState, FormValidationError, FormFieldDeclaration, FormFieldState } from "./model";
import { Input } from "./Input";
import { Button } from "../utrecht";
import { ValidationMessages } from "../ValidationMessages";
import {
  formEnableRequiredValidation,
  formFieldEnableValidation,
  resetForm,
  createFieldState,
  setField,
  getFormState,
} from "./controller";

interface FormBuilderProps {
  fields: FormFieldDeclaration[];
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

interface TouchInputAction {
  type: "touch-input";
  id: string;
}

type Action = ChangeAction | ResetAction | SubmitAction | TouchInputAction;

type FormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const FormBuilder = ({ fields }: FormBuilderProps) => {
  const fieldsState = fields.map((field) => createFieldState(field));

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
                },
              };
            }
          }),
        };

        if (state.form.invalid) {
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
          newState = {
            ...newState,
            submit: {
              ...state.submit,
              busy: true,
              errors: [
                {
                  id: "7bfe146b-5fec-4832-8a12-c406796e62d0",
                  message: "Internal Server error 500",
                },
              ],
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

  const handleInputChange = (event: FormEvent<FormControl>) => {
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
      <form onReset={handleReset} onSubmit={handleSubmit}>
        {state.fields.map((field) => (
          <Input
            key={field.id}
            state={field}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onInput={handleInputChange}
          />
        ))}
        <Button type="reset" disabled={!state.form.dirty} onClick={handleReset}>
          reset
        </Button>
        <Button type="reset" onClick={handleReset}>
          reset
        </Button>
        <Button
          type="submit"
          aria-disabled={state.form.invalid}
          busy={state.submit.busy}
          onClick={handleSubmit}
          aria-describedby={state.submit.validationErrors.map(({ id }) => id).join(" ") || undefined}
        >
          submit
        </Button>
        {state.submit.errors.map(({ message }) => (
          <div role="alert">
            <p>Error: {message}</p>
          </div>
        ))}
        <ValidationMessages errors={state.submit.validationErrors} />
        <pre>{JSON.stringify(state, null, "  ")}</pre>
      </form>
    </>
  );
};
