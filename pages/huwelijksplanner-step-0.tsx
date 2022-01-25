/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  Document,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
  Heading1,
  Heading2,
  Link,
} from "../src/components/utrecht";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageToggle } from "../src/components/LanguageToggle";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "marriage"])),
  },
});

export default function MultistepForm0() {
  const { t } = useTranslation("form");

  return (
    <Document>
      <Head>
        <title>
          {t("huwelijksplanner-step-0:title")}
          {" — "}
          {t("common:organization")}
        </title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@gemeente-denhaag/design-tokens-components/dist/theme/index.css"
        />
      </Head>
      <LanguageToggle />
      <form>
        <Heading1>{t("huwelijksplanner-step-0:heading-1")}</Heading1>
        <Paragraph lead>Plan een datum en tijd. En doe een officiële melding bij de gemeente.</Paragraph>
        <section>
          <Heading2>Welke stappen kun je verwachten?</Heading2>
          <UnorderedList>
            <UnorderedListItem>Kies tussen trouwen en geregistreerd partnerschap.</UnorderedListItem>
            <UnorderedListItem>Kies een datum en tijd voor de bijeenkomst.</UnorderedListItem>
            <UnorderedListItem>Log in met je DigiD.</UnorderedListItem>
            <UnorderedListItem>Betaal met iDEAL.</UnorderedListItem>
            <UnorderedListItem>Je datum is geregeld!</UnorderedListItem>
          </UnorderedList>
          <Paragraph>
            {/* TODO: Link with next icon */}
            <Link href="/huwelijksplanner-step-1">Start</Link>
          </Paragraph>
        </section>
        <section>
          <Heading2>Meer informatie</Heading2>
          <Paragraph>
            {/* TODO: Link list */}
            <Link href="/">
              Wat zijn de verschillen tussen een huwelijk, geregistreerd partnerschap en een samenlevingscontract?
            </Link>
          </Paragraph>
        </section>
      </form>
    </Document>
  );
}
