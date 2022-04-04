import { useTranslation } from "next-i18next";
import { FormStateDispatch, State, useInput } from "../../form/action/reducer";
import { Input } from "../Input";
import { Heading1 } from "../utrecht/Heading1";

export const Address = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-address")}</Heading1>

      <Input state={state.fields[3]} {...useInput(state.fields[3], dispatch)} />

      <div className="todo-form-field-group todo-form-field-group--inline">
        <Input state={state.fields[4]} {...useInput(state.fields[4], dispatch)} />
        <Input state={state.fields[5]} {...useInput(state.fields[5], dispatch)} />
        <Input state={state.fields[6]} {...useInput(state.fields[6], dispatch)} />
      </div>

      <Input state={state.fields[7]} {...useInput(state.fields[7], dispatch)} />
    </>
  );
};
