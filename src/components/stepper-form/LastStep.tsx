import { useTranslation } from "next-i18next";
import { FormStateDispatch, useInput } from "../../form/action/hooks";
import { State } from "../../form/action/reducer";
import { Heading1, Input } from "../index";

export const LastStep = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("last-step")}</Heading1>
      {/*
      <Input
        state={state.fields[0]}
        className="todo-radio-group todo-radio-group--inline"
        {...useInput(state.fields[0], dispatch)}
      />

      <Paragraph>{t("explain-gender-field")}</Paragraph> */}

      <Input state={state.fields[14]} {...useInput(state.fields[14], dispatch)} />
      <Input state={state.fields[11]} {...useInput(state.fields[11], dispatch)} />
      <Input state={state.fields[12]} className="form-field--inline" {...useInput(state.fields[12], dispatch)} />
    </>
  );
};
