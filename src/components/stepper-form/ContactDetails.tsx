import { useTranslation } from "next-i18next";
import { FormStateDispatch, useInput } from "../../form/action/hooks";
import { State } from "../../form/action/reducer";
import { Heading1, Input } from "../index";

export const ContactDetails = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-contact-details")}</Heading1>

      <Input state={state.fields[8]} {...useInput(state.fields[8], dispatch)} />
      <Input state={state.fields[9]} {...useInput(state.fields[9], dispatch)} />
      <Input state={state.fields[10]} {...useInput(state.fields[10], dispatch)} />
    </>
  );
};
