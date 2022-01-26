/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  Document,
  RadioButton,
  Fieldset,
  FieldsetLegend,
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
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DateInput } from "../src/components/DateInput";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-2"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation("huwelijksplanner-step-2");

  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-2:title")}
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
            <form method="POST" action="/api/huwelijksplanner-step-2">
              <Heading1>{t("huwelijksplanner-step-2:heading-1")}</Heading1>
              {/*TODO: Step indicator component */}
              <Paragraph lead>Stap 2 van 5 — Kies datum en tijd</Paragraph>
              <Paragraph>
                Kies hier de datum waarop jullie willen trouwen. Als je op de datum klikt zie je de beschikbare tijden,
                plaatsen en manieren waarop je kunt trouwen.
              </Paragraph>
              <section>
                <FormField>
                  <FormLabel htmlFor="date">Trouwdatum</FormLabel>
                  <DateInput id="date" />
                </FormField>
                <Fieldset>
                  <FieldsetLegend>Kies je datum en tijd</FieldsetLegend>
                  <Fieldset>
                    <FieldsetLegend>Flits/balie-huwelijk — Stadskantoor</FieldsetLegend>
                    <FormField>
                      <RadioButton
                        id="03afe64a-6678-4859-999b-471463727426"
                        name="datetime"
                        value="2021-04-14T09:00+01:00/2021-04-14T09:10+01:00"
                        required
                      />
                      <FormLabel htmlFor="03afe64a-6678-4859-999b-471463727426">
                        <span aria-label="negen uur tot tien over negen">
                          <time dateTime="2021-04-14T09:00+01:00">09.00</time>
                          {" – "}
                          <time dateTime="2021-04-14T09:10+01:00">09.10 uur</time>
                        </span>
                      </FormLabel>
                    </FormField>
                  </Fieldset>
                  <Fieldset>
                    <FieldsetLegend>Uitgebreid trouwen — Zelf de plaats bepalen</FieldsetLegend>
                    <FormField>
                      <RadioButton
                        id="5a796ac6-821e-4549-84a2-14fb929c3bc1"
                        name="datetime"
                        value="2021-04-14T10:00+01:00/2021-04-14T11:10+01:00"
                        required
                      />
                      <FormLabel htmlFor="5a796ac6-821e-4549-84a2-14fb929c3bc1">
                        <span aria-label="tien uur tot elf uur">
                          <time dateTime="2021-04-14T10:00+01:00">10.00</time>
                          {" – "}
                          <time dateTime="2021-04-14T11:00+01:00">11.10 uur</time>
                        </span>
                      </FormLabel>
                    </FormField>
                  </Fieldset>
                </Fieldset>
                <Button type="submit" name="type">
                  Ja, dat wil ik!
                </Button>
              </section>
              <section>
                <Heading2>Meer informatie</Heading2>
                <Paragraph>
                  <Link href="/" external>
                    Wat zijn de verschillen tussen een huwelijk, geregistreerd partnerschap en een samenlevingscontract?
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link href="/" external>
                    Waar moet ik aan denken als ik wil trouwen of een geregistreerd partnerschap wil sluiten?
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link href="/" external>
                    Trouwen of partnerschap registreren in Utrecht
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
