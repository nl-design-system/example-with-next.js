import Head from "next/head";
import {
  Document,
  Fieldset,
  FieldsetLegend,
  Paragraph,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
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
import { exampleState } from "../src/data/huwelijksplanner-state";
import { useRouter } from "next/router";
import { ReservationCard } from "../src/components/huwelijksplanner/ReservationCard";

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
      </Head>
      <Page>
        <PageHeader>
          <LanguageToggle />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <Heading1>{t("huwelijksplanner-step-5:heading-1")}</Heading1>
            {/*TODO: Previous button */}
            {/*TODO: Step indicator component */}
            <Paragraph lead>Stap 3 — Meld je voorgenomen huwelijk</Paragraph>
            {/*TODO: Banner / card */}
            {data["reservation"] ? <ReservationCard reservation={data["reservation"]} locale={locale} /> : ""}
            <section>
              <Heading2>Nodig alvast getuigen uit</Heading2>
              <Paragraph>Bij je huwelijk zijn minimaal twee en maximaal vier getuigen nodig.</Paragraph>
              <Paragraph>
                Het is niet verplicht om hun namen nu al in te vullen. Uiterlijk vier weken voor je huwelijksdatum moet
                je de getuigen aanmelden.
              </Paragraph>
              {/*TODO: Dynamisch tonen hoe lang er nog is om getuigen aan te melden*/}
              <form method="post" action="/api/getuige">
                <Fieldset>
                  <FieldsetLegend>{t("marriage:legal-witness")} 1</FieldsetLegend>
                  <FormField>
                    <FormLabel htmlFor="getuige-1-naam">{t("form:name")}</FormLabel>
                    <TextInput
                      id="getuige-1-naam"
                      type="text"
                      autoComplete="name section-getuige-1"
                      required
                    ></TextInput>
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="getuige-1-email">{t("form:email")}</FormLabel>
                    <TextInput
                      id="getuige-1-email"
                      type="email"
                      autoComplete="email section-getuige-1"
                      required
                    ></TextInput>
                  </FormField>
                </Fieldset>
                <Fieldset>
                  <FieldsetLegend>{t("marriage:legal-witness")} 2</FieldsetLegend>
                  <FormField>
                    <FormLabel htmlFor="getuige-2-naam">{t("form:name")}</FormLabel>
                    <TextInput
                      id="getuige-2-naam"
                      type="text"
                      autoComplete="name section-getuige-2"
                      required
                    ></TextInput>
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="getuige-2-email">{t("form:email")}</FormLabel>
                    <TextInput
                      id="getuige-2-email"
                      type="email"
                      autoComplete="email section-getuige-2"
                      required
                    ></TextInput>
                  </FormField>
                </Fieldset>
                <Fieldset>
                  <FieldsetLegend>{t("marriage:legal-witness")} 3</FieldsetLegend>
                  <FormField>
                    <FormLabel htmlFor="getuige-3-naam">{t("form:name")}</FormLabel>
                    <TextInput id="getuige-3-naam" type="text" autoComplete="name section-getuige-3"></TextInput>
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="getuige-3-email">{t("form:email")}</FormLabel>
                    <TextInput id="getuige-3-email" type="email" autoComplete="email section-getuige-3"></TextInput>
                  </FormField>
                </Fieldset>
                <Fieldset>
                  <FieldsetLegend>{t("marriage:legal-witness")} 4</FieldsetLegend>
                  <FormField>
                    <FormLabel htmlFor="getuige-4-naam">{t("form:name")}</FormLabel>
                    <TextInput id="getuige-4-naam" type="text" autoComplete="name section-getuige-4"></TextInput>
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="getuige-4-email">{t("form:email")}</FormLabel>
                    <TextInput id="getuige-4-email" type="email" autoComplete="email section-getuige-4"></TextInput>
                  </FormField>
                </Fieldset>
                <div>
                  <Button type="submit">Verstuur uitnodiging</Button>
                </div>
              </form>
            </section>
          </PageContentMain>
        </PageContent>
      </Page>
    </Document>
  );
}
