/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Document, FormField, FormLabel, Heading1, Heading2, TextInput } from "../src/components/utrecht";
import { DataNoTranslate, DataNumeric } from "../src/components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DataListValue, LanguageToggle, OptionalIndicator } from "../src/components";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "marriage"])),
  },
});

export default function Form() {
  const { t } = useTranslation(["form", "marriage"]);

  const data = {
    bsn: "123456789",
    salutation: "De heer",
    "given-name": "Anne Nicolas Johannes",
    "family-name-prefix": "",
    "family-name": "Deursen",
    "marital-status": "Ongehuwd en nooit geweest",
    bday: "1988-06-10",
    "place-of-birth": "Arnhem",
    "registered-guardianship": "",
    street: "Rubenslaan",
    "house-number": "127",
    "house-number-suffix": "",
    "postal-code": "3582JH",
    "place-of-residence": "Utrecht",
  };

  return (
    <Document>
      <Head>
        <title>{t("marriage:page-title")}</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <LanguageToggle />
      <Heading1>{t("marriage:page-title")}</Heading1>
      <Heading2 id="personal-details">Persoonsgegevens</Heading2>
      <dl aria-describedby="personal-details">
        <div>
          <dt>{t("bsn")}</dt>
          <DataListValue value={data.bsn} emptyDescription={t("data-item-unknown")}>
            <DataNumeric>{data.bsn}</DataNumeric>
          </DataListValue>
        </div>
        <div>
          <dt>{t("salutation")}</dt>
          <DataListValue value={data.salutation} emptyDescription={t("data-item-unknown")}>
            {data.salutation}
          </DataListValue>
        </div>
        <div>
          <dt>{t("given-name")}</dt>
          <DataListValue value={data["given-name"]} emptyDescription={t("data-item-unknown")}>
            <DataNoTranslate>{data["given-name"]}</DataNoTranslate>
          </DataListValue>
        </div>
        <div>
          <dt>{t("family-name-prefix")}</dt>
          <DataListValue value={data["family-name-prefix"]} emptyDescription={t("data-item-empty")}>
            <DataNoTranslate>{data["family-name-prefix"]}</DataNoTranslate>
          </DataListValue>
        </div>
        <div>
          <dt>{t("family-name")}</dt>
          <DataListValue value={data["family-name"]} emptyDescription={t("data-item-unknown")}>
            <DataNoTranslate>{data["family-name"]}</DataNoTranslate>
          </DataListValue>
        </div>
        <div>
          <dt>{t("marital-status")}</dt>
          <DataListValue value={data["marital-status"]} emptyDescription={t("data-item-unknown")}>
            {data["marital-status"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("bday")}</dt>
          <DataListValue value={data["bday"]} emptyDescription={t("data-item-unknown")}>
            {data["bday"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("place-of-birth")}</dt>
          <DataListValue value={data["place-of-birth"]} emptyDescription={t("data-item-unknown")}>
            <DataNoTranslate>{data["place-of-birth"]}</DataNoTranslate>
          </DataListValue>
        </div>
        <div>
          <dt>{t("registered-guardianship")}</dt>
          <DataListValue value={data["registered-guardianship"]} emptyDescription={t("data-item-unknown")}>
            {data["registered-guardianship"]}
          </DataListValue>
        </div>
      </dl>
      <Heading2 id="address">Adresgegevens</Heading2>
      <dl aria-describedby="address">
        <div>
          <dt>{t("street")}</dt>
          <DataListValue value={data.street} emptyDescription={t("data-item-unknown")}>
            <DataNumeric>{data.street}</DataNumeric>
          </DataListValue>
        </div>
        <div>
          <dt>{t("house-number")}</dt>
          <DataListValue value={data["house-number"]} emptyDescription={t("data-item-unknown")}>
            {data["house-number"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("house-number-suffix")}</dt>
          <DataListValue value={data["house-number-suffix"]} emptyDescription={t("data-item-empty")}>
            <DataNoTranslate>{data["house-number-suffix"]}</DataNoTranslate>
          </DataListValue>
        </div>
        <div>
          <dt>{t("postal-code")}</dt>
          <DataListValue value={data["postal-code"]} emptyDescription={t("data-item-unknown")}>
            {data["postal-code"]}
          </DataListValue>
        </div>
        <div>
          <dt>{t("place-of-residence")}</dt>
          <DataListValue value={data["place-of-residence"]} emptyDescription={t("data-item-unknown")}>
            <DataNoTranslate>{data["place-of-residence"]}</DataNoTranslate>
          </DataListValue>
        </div>
      </dl>
      <h2 id="contact">Contactgegevens</h2>
      <dl>
        <p>Deze gegevens kun je zelf invullen of wijzigen.</p>
        <FormField>
          <FormLabel htmlFor="tel">
            {t("tel")} <OptionalIndicator title={t("form:optional")} />
          </FormLabel>
          <TextInput id="tel" type="tel" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="email">
            {t("email")} <OptionalIndicator title={t("form:optional")} />
          </FormLabel>
          <TextInput id="email" type="email" />
        </FormField>
      </dl>
    </Document>
  );
}
