import { useTranslation } from "next-i18next";
import { FormField } from "../utrecht/FormField";
import { FormLabel } from "../utrecht/FormLabel";
import { Heading1 } from "../utrecht/Heading1";
import { Textbox } from "../utrecht/Textbox";

export enum ADDRESS {
  "STREET" = "street",
  "HOUSE_NUMBER" = "house-number",
  "HOUSE_NUMBER_SUFFIX" = "house-number-suffix",
  "POSTAL_CODE" = "postal-code",
  "PLACE_OF_RESIDENCE" = "place-of-residence",
}

export const Address = () => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("your-address")}</Heading1>

      <FormField>
        <FormLabel htmlFor="street">{t("street")}</FormLabel>
        <Textbox id="street" name={ADDRESS.STREET} />
      </FormField>

      <div className="todo-form-field-group todo-form-field-group--inline">
        <FormField>
          <FormLabel htmlFor="house-number">{t("house-number")}</FormLabel>
          <Textbox id="house-number" name={ADDRESS.HOUSE_NUMBER} />
        </FormField>
        <FormField>
          <FormLabel htmlFor="house-number-suffix">{t("suffix")}</FormLabel>
          <Textbox id="house-number-suffix" name={ADDRESS.HOUSE_NUMBER_SUFFIX} />
        </FormField>
        <FormField>
          <FormLabel htmlFor="postal-code">{t("postal-code")}</FormLabel>
          <Textbox id="postal-code" name={ADDRESS.POSTAL_CODE} />
        </FormField>
      </div>

      <FormField>
        <FormLabel htmlFor="place-of-residence">{t("place-of-residence")}</FormLabel>
        <Textbox id="place-of-residence" name={ADDRESS.PLACE_OF_RESIDENCE} />
      </FormField>
    </>
  );
};
