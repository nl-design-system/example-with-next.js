import { useTranslation } from "next-i18next";
import { FormStateDispatch, useInput } from "../../form/action/hooks";
import { State } from "../../form/action/reducer";
import { Input } from "../Input";
import { Heading1 } from "../utrecht/Heading1";

export const PersonalDetails = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");
  console.log("state", state);
  return (
    <>
      <Heading1 className="utrecht-heading-1--distanced">{t("your-personal-details")}</Heading1>

      <Input
        state={state.fields[0]}
        className="todo-radio-group todo-radio-group--inline"
        {...useInput(state.fields[0], dispatch)}
      />

      <Input state={state.fields[1]} {...useInput(state.fields[1], dispatch)} />

      <Input
        state={state.fields[13]}
        {...useInput(state.fields[13], dispatch)}
        className="todo-form-field--max-length todo-form-field--family-name-prefix"
      />

      <Input state={state.fields[2]} {...useInput(state.fields[2], dispatch)} />
    </>
  );
};
