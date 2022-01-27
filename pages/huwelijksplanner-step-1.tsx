/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  Document,
  Paragraph,
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

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["huwelijksplanner-step-1"])),
  },
});

export default function MultistepForm1() {
  const { t } = useTranslation("huwelijksplanner-step-1");

  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-1:title")}
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
            <form method="POST" action="/api/huwelijksplanner-step-1">
              <Heading1>{t("huwelijksplanner-step-1:heading-1")}</Heading1>
              {/*TODO: Step indicator component */}
              <Paragraph lead>Stap 1 van 5 — Kies wat je wil</Paragraph>
              <section>
                <Heading2>Wij willen trouwen</Heading2>
                <Button type="submit" name="type" value="huwelijk">
                  Trouwen plannen
                </Button>
                <Heading2>Wij willen een geregistreerd partnerschap</Heading2>
                <Button type="submit" name="type" value="geregistreerd partnerschap">
                  Geregistreerd partnerschap plannen
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
