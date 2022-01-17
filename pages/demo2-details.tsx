import Head from "next/head";
import { UtrechtDocument, UtrechtHeading1 } from "@utrecht/web-component-library-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { DataListValue } from "../src/components/DataListValue";
import { EmptyIndicator } from "../src/components/EmptyIndicator";
import { DemoForm } from "../types/DemoForm";
import { LanguageToggle } from "../src/components/LanguageToggle";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form"])),
  },
});

export default function Demo2Details() {
  const { t } = useTranslation("form");

  const formState = {
    "given-name": "Bobby",
    "family-name": "Tables",
    "family-name-prefix": "on the",
    "given-name-initials": "B",
    "name-original-writing": "Robert'); DROP TABLE Students--",
    "manner-of-address": "little",
    gender: "male",
    bday: "2001-02-03",
    bsn: 123456789,
    email: "btables@hotcakes.com",
    tel: "02012345678",
    "tel-mobile": "06123456789",
    "tel-daytime": "06123456789",
    "tel-evening": "02012345678",
    "postal-code": "4242BT",
    "house-number": 21,
    "house-number-letter": "Z",
    "house-number-suffix": "achterste voren",
    street: "Wasstraat",
    "place-of-residence": "Groet",
    municipality: "Schoorl",
    country: "Fantasieland",
    "location-description": "",
    "contact-preference": "email",
    "accept-data-handling": true,
  } as DemoForm;

  return (
    <UtrechtDocument>
      <Head>
        <title>{t("page-title")}</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <UtrechtHeading1>{t("page-title")}</UtrechtHeading1>
      <LanguageToggle />

      <section>
        <h2 id="h2">{t("personal-details")}</h2>
        {/* <!-- test <dl> met aria-describedby --> */}
        <dl aria-describedby="h2">
          {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
          <div>
            <dt>{t("manner-of-address")}</dt>
            <DataListValue value={formState["house-number"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["house-number"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("given-name-initials")}</dt>{" "}
            <DataListValue value={formState["given-name-initials"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["given-name-initials"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("given-name")}</dt>
            <DataListValue value={formState["given-name"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["given-name"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("family-name-prefix")}</dt>{" "}
            <DataListValue value={formState["family-name-prefix"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["family-name-prefix"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("family-name")}</dt>
            <DataListValue value={formState["family-name"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["family-name"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("name-original-writing")}</dt>{" "}
            <DataListValue value={formState["name-original-writing"]} emptyDescription={t("data-item-input-empty")}>
              <bdi className="notranslate">{formState["name-original-writing"]}</bdi>
            </DataListValue>
          </div>
          <div>
            <dt>{t("gender")}</dt>
            <DataListValue value={formState.gender} emptyDescription={t("data-item-input-empty")}>
              {t(`gender-${formState.gender}`)}
            </DataListValue>
          </div>
          <div>
            <dt>{t("bsn")}</dt>
            <DataListValue value={formState.bsn} emptyDescription={t("data-item-input-empty")}>
              {formState.bsn}
            </DataListValue>
          </div>
          <div>
            <dt>{t("bday")}</dt>
            <DataListValue value={formState.bday} emptyDescription={t("data-item-input-empty")}>
              {/* TODO: Use library to display ISO8601 in human readable format */}
              <time dateTime={formState.bday}>{formState.bday}</time>
            </DataListValue>
          </div>
        </dl>
      </section>
      <section>
        <h2 id="h2">{t("contact-details")}</h2>
        {/* <!-- test <dl> met aria-describedby --> */}
        <dl aria-describedby="h2">
          {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
          <div>
            <dt>{t("postal-code")}</dt>
          </div>
          <div>
            <dt>{t("house-number")}</dt>
            <DataListValue value={formState["house-number"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["house-number"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("house-number-letter")}</dt>
            <DataListValue value={formState["house-number-letter"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["house-number-letter"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("house-number-suffix")}</dt>
            <DataListValue value={formState["house-number-suffix"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["house-number-suffix"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("street")}</dt>
            <DataListValue value={formState.street} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.street}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("place-of-residence")}</dt>
            <DataListValue value={formState["place-of-residence"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["place-of-residence"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("municipality")}</dt>
            <DataListValue value={formState.municipality} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.municipality}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("country")}</dt>
            <DataListValue value={formState.country} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.country}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("email")}</dt>
            <DataListValue value={formState.email} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.email}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("tel")}</dt>
            <DataListValue value={formState.tel} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.tel}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("tel-mobile")}</dt>
            <DataListValue value={formState["tel-mobile"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["tel-mobile"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("tel-daytime")}</dt>
            <DataListValue value={formState["tel-daytime"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["tel-daytime"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("tel-evening")}</dt>
            <DataListValue value={formState["tel-evening"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["tel-evening"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("location-description")}</dt>
            <DataListValue value={formState["location-description"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["location-description"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("contact-preference")}</dt>
            <DataListValue value={formState["contact-preference"]} emptyDescription={t("data-item-input-empty")}>
              <span>
                {t(`contact-${formState["contact-preference"]}`) || (
                  <EmptyIndicator title={t("data-item-input-empty")} />
                )}
              </span>
            </DataListValue>
          </div>
        </dl>
      </section>
      <section>
        <h2 id="h2">{t("financial-details")}</h2>
        {/* <!-- test <dl> met aria-describedby --> */}
        <dl aria-describedby="h2">
          {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
          <div>
            <dt>{t("iban")}</dt>
            <DataListValue value={formState.iban} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.iban}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("bic")}</dt>
            <DataListValue value={formState.bic} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.bic}</span>
            </DataListValue>
          </div>
        </dl>
      </section>
      <section>
        <h2 id="h2">{t("commercial-details")}</h2>
        {/* <!-- test <dl> met aria-describedby --> */}
        <dl aria-describedby="h2">
          {/* <!-- How annoying is it to have a screen reader repeat the name and say "heading level 2 Persoonsgegevens, definition list Persoonsgegevens"? --> */}
          <div>
            <dt>{t("kvk-number")}</dt>
            <DataListValue value={formState["kvk-number"]} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState["kvk-number"]}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("organization")}</dt>
            <DataListValue value={formState.organization} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.organization}</span>
            </DataListValue>
          </div>
          <div>
            <dt>{t("website")}</dt>
            <DataListValue value={formState.website} emptyDescription={t("data-item-input-empty")}>
              <span className="notranslate">{formState.website}</span>
            </DataListValue>
          </div>
        </dl>
      </section>
    </UtrechtDocument>
  );
}
