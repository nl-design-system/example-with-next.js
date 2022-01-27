/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  Document,
  Paragraph,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Button,
  Page,
  PageContent,
  PageContentMain,
  PageHeader,
  TextInput,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DataListValue, DataNumeric, DataNoTranslate, OptionalIndicator } from "../src/components";
import { exampleState } from "../src/data/huwelijksplanner-state";
import { ReservationCard } from "../src/components/huwelijksplanner/ReservationCard";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-4", "form"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation(["huwelijksplanner-step-4", "form"]);
  const data = { ...exampleState };
  const locale = useRouter().locale || "en";

  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-4:title")}
          {" — "}
          {t("common:website-name")}
        </title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <Page>
        <PageHeader>
          <LanguageToggle />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <form method="POST" action="/api/huwelijksplanner-step-3">
              <Heading1>{t("huwelijksplanner-step-3:heading-1")}</Heading1>
              {/*TODO: Previous button */}
              {/*TODO: Step indicator component */}
              <Paragraph lead>Stap 3 — Meld je voorgenomen huwelijk</Paragraph>
              {/*TODO: Banner / card */}
              {data["reservation"] ? <ReservationCard reservation={data["reservation"]} locale={locale} /> : ""}
              <section>
                {/*TODO: Banner / card */}
                <section>
                  <Heading2>Gegevens uit Basisregistratie Personen</Heading2>
                  <Paragraph>
                    Hieronder zie je de gegevens die bij ons bekend zijn. De contactgegevens kun je zelf invullen of
                    wijzigen.
                  </Paragraph>
                </section>
                <Heading2 id="personal-details">Persoonsgegevens</Heading2>
                <dl aria-describedby="personal-details">
                  <div>
                    <dt>{t("form:bsn")}</dt>
                    <DataListValue value={data.partner1.bsn} emptyDescription={t("form:data-item-unknown")}>
                      <DataNumeric>{data.partner1.bsn}</DataNumeric>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:salutation")}</dt>
                    <DataListValue value={data.partner1.salutation} emptyDescription={t("form:data-item-unknown")}>
                      {data.partner1.salutation}
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:given-name")}</dt>
                    <DataListValue value={data.partner1["given-name"]} emptyDescription={t("form:data-item-unknown")}>
                      <DataNoTranslate>{data.partner1["given-name"]}</DataNoTranslate>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:family-name-prefix")}</dt>
                    <DataListValue
                      value={data.partner1["family-name-prefix"]}
                      emptyDescription={t("form:data-item-empty")}
                    >
                      <DataNoTranslate>{data.partner1["family-name-prefix"]}</DataNoTranslate>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:family-name")}</dt>
                    <DataListValue value={data.partner1["family-name"]} emptyDescription={t("form:data-item-unknown")}>
                      <DataNoTranslate>{data.partner1["family-name"]}</DataNoTranslate>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:marital-status")}</dt>
                    <DataListValue
                      value={data.partner1["marital-status"]}
                      emptyDescription={t("form:data-item-unknown")}
                    >
                      {data.partner1["marital-status"]}
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:bday")}</dt>
                    <DataListValue value={data.partner1["bday"]} emptyDescription={t("form:data-item-unknown")}>
                      {data.partner1["bday"]}
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:place-of-birth")}</dt>
                    <DataListValue
                      value={data.partner1["place-of-birth"]}
                      emptyDescription={t("form:data-item-unknown")}
                    >
                      <DataNoTranslate>{data.partner1["place-of-birth"]}</DataNoTranslate>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:registered-guardianship")}</dt>
                    <DataListValue
                      value={data.partner1["indicatie-curateleregister"] === 1 ? "Ja" : undefined}
                      emptyDescription={t("form:data-item-unknown")}
                    >
                      {/*TODO:What are the values and labels here?*/}
                      {data.partner1["indicatie-curateleregister"] === 1 ? "Ja" : "Nee"}
                    </DataListValue>
                  </div>
                </dl>
                <Heading2 id="address">Adresgegevens</Heading2>
                <dl aria-describedby="address">
                  <div>
                    <dt>{t("form:street")}</dt>
                    <DataListValue value={data.partner1.street} emptyDescription={t("form:data-item-unknown")}>
                      <DataNumeric>{data.partner1.street}</DataNumeric>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:house-number")}</dt>
                    <DataListValue value={data.partner1["house-number"]} emptyDescription={t("form:data-item-unknown")}>
                      {data.partner1["house-number"]}
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:house-number-suffix")}</dt>
                    <DataListValue
                      value={data.partner1["house-number-suffix"]}
                      emptyDescription={t("form:data-item-empty")}
                    >
                      <DataNoTranslate>{data.partner1["house-number-suffix"]}</DataNoTranslate>
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:postal-code")}</dt>
                    <DataListValue value={data.partner1["postal-code"]} emptyDescription={t("form:data-item-unknown")}>
                      {data.partner1["postal-code"]}
                    </DataListValue>
                  </div>
                  <div>
                    <dt>{t("form:place-of-residence")}</dt>
                    <DataListValue
                      value={data.partner1["place-of-residence"]}
                      emptyDescription={t("form:data-item-unknown")}
                    >
                      <DataNoTranslate>{data.partner1["place-of-residence"]}</DataNoTranslate>
                    </DataListValue>
                  </div>
                </dl>
                <Heading2 id="contact">Contactgegevens</Heading2>
                <dl>
                  <p>Deze gegevens kun je zelf invullen of wijzigen.</p>
                  <FormField>
                    <FormLabel htmlFor="tel">
                      {t("form:tel")} <OptionalIndicator title={t("form:optional")} />
                    </FormLabel>
                    <TextInput id="tel" type="tel" value={data.partner1["tel"]} />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="email">
                      {t("form:email")} <OptionalIndicator title={t("form:optional")} />
                    </FormLabel>
                    <TextInput id="email" type="email" value={data.partner1["email"]} />
                  </FormField>
                </dl>
                <Button type="submit" name="type">
                  Deze gegevens kloppen
                </Button>
              </section>
              <section>
                <Heading2>Meer informatie</Heading2>
                <Paragraph>
                  <Link href="/" external target="_blank">
                    Vraag DigiD aan
                  </Link>
                </Paragraph>
              </section>
            </form>
          </PageContentMain>
        </PageContent>
      </Page>
    </Document>
  );
}
