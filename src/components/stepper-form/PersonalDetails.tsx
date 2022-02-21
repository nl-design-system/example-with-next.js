import { useTranslation } from "next-i18next";
import { Fieldset } from "../utrecht/Fieldset";
import { FieldsetLegend } from "../utrecht/FieldsetLegend";
import { FormField } from "../utrecht/FormField";
import { FormLabel } from "../utrecht/FormLabel";
import { Heading1 } from "../utrecht/Heading1";
import { RadioButton } from "../utrecht/RadioButton";
import { Textbox } from "../utrecht/Textbox";

export enum PERSONAL_DETAILS {
  "GENDER" = "gender",
  "GIVEN_NAME" = "given-name",
  "FAMILY_NAME" = "family-name",
}

export const PersonalDetails = () => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1 className="utrecht-heading-1--distanced">{t("your-personal-details")}</Heading1>
      <Fieldset role="radiogroup" className="todo-radio-group todo-radio-group--inline">
        <FieldsetLegend>{t("gender")}</FieldsetLegend>
        <FormField>
          <RadioButton id="female" name={PERSONAL_DETAILS.GENDER} value="female" />
          <FormLabel htmlFor="female" type="radio">
            {t("gender-female")}
          </FormLabel>
        </FormField>
        <FormField>
          <RadioButton id="male" name={PERSONAL_DETAILS.GENDER} value="male" />
          <FormLabel htmlFor="male" type="radio">
            {t("gender-male")}
          </FormLabel>
        </FormField>
        <FormField>
          <RadioButton id="unknown" name={PERSONAL_DETAILS.GENDER} value="unknown" />
          <FormLabel htmlFor="unknown" type="radio">
            {t("gender-unknown")}
          </FormLabel>
        </FormField>
      </Fieldset>

      <FormField>
        <FormLabel htmlFor="given-name">{t("given-name")}</FormLabel>
        <Textbox id="given-name" name={PERSONAL_DETAILS.GIVEN_NAME} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="family-name">{t("family-name")}</FormLabel>
        <Textbox id="family-name" name={PERSONAL_DETAILS.FAMILY_NAME} />
      </FormField>
    </>
  );
};
