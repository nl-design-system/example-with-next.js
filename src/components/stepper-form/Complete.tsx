import { useTranslation } from "next-i18next";
import { Heading1 } from "../index";

export const Complete = () => {
  const { t } = useTranslation("stepper-form");

  return (
    <>
      <Heading1>{t("form-complete")}</Heading1>
    </>
  );
};
