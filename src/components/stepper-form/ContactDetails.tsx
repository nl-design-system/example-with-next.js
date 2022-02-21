import { useTranslation } from "next-i18next";
import { FormField } from "../utrecht/FormField";
import { FormLabel } from "../utrecht/FormLabel";
import { Heading1 } from "../utrecht/Heading1";
import { Textbox } from "../utrecht/Textbox";

export enum CONTACT_DETAILS {
  EMAIL = "email",
  TEL = "tel",
  MOBILE = "tel-mobile",
}

export const ContactDetails = () => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-contact-details")}</Heading1>

      <FormField>
        <FormLabel htmlFor="email">{t("contact-email")}</FormLabel>
        <Textbox id="email" type="email" autoComplete="email" name={CONTACT_DETAILS.EMAIL} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="tel">{t("tel")}</FormLabel>
        <Textbox id="tel" autoComplete="tel" name={CONTACT_DETAILS.TEL} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="tel-mobile">{t("tel-mobile")}</FormLabel>
        <Textbox id="tel-mobile" autoComplete="tel mobile" name={CONTACT_DETAILS.MOBILE} />
      </FormField>
    </>
  );
};
