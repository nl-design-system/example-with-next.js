import { useTranslation } from "next-i18next";
import { FormStateDispatch, useInput } from "../../form/action/hooks";
import { State } from "../../form/action/reducer";
import { Heading1, Input } from "../index";

export const Address = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-address")}</Heading1>

      <Input state={state.fields[3]} {...useInput(state.fields[3], dispatch)} />

      <Input
        state={state.fields[4]}
        {...useInput(state.fields[4], dispatch)}
        className="todo-form-field--max-length todo-form-field--house-number"
      />

      <Input
        state={state.fields[5]}
        {...useInput(state.fields[5], dispatch)}
        className="todo-form-field--max-length todo-form-field--house-number-suffix"
      />

      <Input
        state={state.fields[6]}
        {...useInput(state.fields[6], dispatch)}
        className="todo-form-field--max-length todo-form-field--postcode"
      />

      <Input state={state.fields[7]} {...useInput(state.fields[7], dispatch)} />
    </>
  );
};
