import { useTranslation } from "next-i18next";
import { Checkbox } from "../utrecht/Checkbox";
import { FormField } from "../utrecht/FormField";
import { FormLabel } from "../utrecht/FormLabel";
import { Heading1 } from "../utrecht/Heading1";
import { Textarea } from "../utrecht/Textarea";

export enum LAST_STEP {
  QUESTION = "your-question",
}

export const LastStep = () => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-question")}</Heading1>

      <FormField>
        <FormLabel htmlFor="question">{t("ask-your-question")}</FormLabel>
        <Textarea rows={7} name={LAST_STEP.QUESTION} />
      </FormField>

      <FormField className="form-field--inline">
        <Checkbox id="accept-data-handling" name="accept-data-handling" />
        <FormLabel htmlFor="accept-data-handling" type="checkbox">
          {t("accept-data-handling")}
        </FormLabel>
      </FormField>
    </>
  );
};
