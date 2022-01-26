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
  TextInput,
  OrderedList,
  OrderedListItem,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";
import { DataListValue, DataNumeric, DataNoTranslate, OptionalIndicator } from "../src/components";
import { exampleState } from "../src/data/huwelijksplanner-state";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-4", "form"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation(["huwelijksplanner-step-4", "form"]);
  const data = { ...exampleState };

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
            <form method="POST" action="/api/huwelijksplanner-step-6">
              <Heading1>{t("huwelijksplanner-step-5:heading-6")}</Heading1>
              {/*TODO: Previous button */}
              {/*TODO: Step indicator component */}
              <Paragraph lead>Stap 3 — Meld je voorgenomen huwelijk</Paragraph>
              {/*TODO: Banner / card */}
              <div>
                <div>LOCATIE STADSKANTOOR - EENVOUDIG TROUWEN</div>
                <div>14 April 2021 (10.00 - 10.15 uur)</div>
                <div>Kosten: € 168</div>
              </div>
              <section>
                <Heading2>Gelukt!</Heading2>
                <Paragraph>
                  {data.partner2["given-name"]} heeft met DigID ingelogd. Nu kunnen jullie verder met het plannen van
                  het huwelijk. Er volgen nog een paar stappen:
                </Paragraph>
                <OrderedList>
                  <OrderedListItem>
                    Je kunt alvast de getuigen uitnodigen en/of extra’s aanschaffen om je huwelijk nog leuker te maken.
                    Dat kan natuurlijk ook later
                  </OrderedListItem>
                  <OrderedListItem>
                    De gemeente Utrecht checkt een aantal dingen, bijvoorbeeld of {data.partner2["given-name"]} geen
                    broer of zus van je is
                  </OrderedListItem>
                  <OrderedListItem>Dan kun je betalen en is de reservering van je huwelijk klaar</OrderedListItem>
                </OrderedList>
                <Button type="submit" name="type">
                  Laat de gemeente checken en ga betalen
                </Button>
                <Paragraph>of</Paragraph>
                <Button type="submit" name="type">
                  vul aan met getuiges en extra's
                </Button>
              </section>
            </form>
          </PageContentMain>
        </PageContent>
      </Page>
    </Document>
  );
}
