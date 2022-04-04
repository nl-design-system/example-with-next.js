import { useTranslation } from "next-i18next";
import { FormStateDispatch, State, useInput } from "../../form/action/reducer";
import { Input } from "../Input";
import { Heading1 } from "../utrecht/Heading1";

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
