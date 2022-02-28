import { useTranslation } from "next-i18next";
import { FormStateDispatch, useInput } from "../../form/action/hooks";
import { State } from "../../form/action/reducer";
import { Input } from "../Input";
import { Heading1 } from "../utrecht/Heading1";

export const LastStep = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-question")}</Heading1>

      <Input state={state.fields[11]} {...useInput(state.fields[11], dispatch)} />
      <Input state={state.fields[12]} className="form-field--inline" {...useInput(state.fields[12], dispatch)} />
    </>
  );
};
