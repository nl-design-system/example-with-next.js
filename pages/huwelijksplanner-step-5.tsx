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
  PageFooter,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { exampleState } from "../src/data/huwelijksplanner-state";
import { ReservationCard } from "../src/components/huwelijksplanner/ReservationCard";
import { useRouter } from "next/router";
import { PageHeaderTemplate } from "../src/components/huwelijksplanner/PageHeaderTemplate";
import { PageFooterTemplate } from "../src/components/huwelijksplanner/PageFooterTemplate";

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
          <PageHeaderTemplate />
        </PageHeader>
        <PageContent>
          <PageContentMain>
            <form method="POST" action="/api/huwelijksplanner-step-5">
              <Heading1>{t("huwelijksplanner-step-5:heading-1")}</Heading1>
              {/*TODO: Previous button */}
              {/*TODO: Step indicator component */}
              <Paragraph lead>Stap 3 — Meld je voorgenomen huwelijk</Paragraph>
              {/*TODO: Banner / card */}
              {data["reservation"] ? <ReservationCard reservation={data["reservation"]} locale={locale} /> : ""}
              <section>
                <Heading2>Nodig je partner uit</Heading2>
                <Paragraph>
                  We hebben jouw gegevens ontvangen. Je kunt nu je partner uitnodigen om ook in te loggen met DigID. Zo
                  bevestigt je partner dat jullie het huwelijk willen regelen.
                </Paragraph>
                <Fieldset>
                  <FieldsetLegend>Partner</FieldsetLegend>
                  <FormField>
                    <FormLabel htmlFor="partner-name">{t("form:name")}</FormLabel>
                    <TextInput
                      id="partner-name"
                      autoComplete="section-partner name"
                      type="text"
                      value={data.partnerInvitation["name"]}
                      required
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="partner-email">{t("form:email")}</FormLabel>
                    <TextInput
                      id="partner-email"
                      autoComplete="section-partner email"
                      type="email"
                      value={data.partnerInvitation["email"]}
                      required
                    />
                  </FormField>
                </Fieldset>
                <Button type="submit" name="type">
                  Verstuur uitnodiging
                </Button>
              </section>
            </form>
          </PageContentMain>
        </PageContent>{" "}
        <PageFooter>
          <PageFooterTemplate />
        </PageFooter>
      </Page>
    </Document>
  );
}
