import { UtrechtDocument, UtrechtHeading } from "@utrecht/web-component-library-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import NextLink from "next/link";
import {
  LanguageToggle,
  Link,
  PageContent,
  PageHeader,
  ThemeSwitcher,
  UnorderedList,
  UnorderedListItem,
} from "../src/components";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["demo-overview", "stepper-form", "theme-switcher"])),
  },
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <UtrechtDocument>
        <Head>
          <title>Demo</title>
          <meta name="description" content={t("demo-overview:page-title")} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageHeader>
          <ThemeSwitcher />
          <nav>
            <LanguageToggle />
          </nav>
        </PageHeader>
        <main>
          <PageContent>
            <UtrechtHeading level={1}>{t("demo-overview:page-title")}</UtrechtHeading>
            <UnorderedList>
              <UnorderedListItem>
                <NextLink href="/stepper-form/step-1" passHref>
                  <Link>{t("stepper-form:page-title")}</Link>
                </NextLink>
              </UnorderedListItem>
              <UnorderedListItem>
                <NextLink href="/first-name" passHref>
                  <Link>Formulierveld: voornaam</Link>
                </NextLink>
              </UnorderedListItem>
            </UnorderedList>
          </PageContent>
        </main>
      </UtrechtDocument>
    </>
  );
}
