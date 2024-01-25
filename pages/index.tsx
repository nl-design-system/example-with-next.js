import { UtrechtDocument, UtrechtHeading } from "@utrecht/web-component-library-react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
                <Link href="/stepper-form/step-1">{t("stepper-form:page-title")}</Link>
              </UnorderedListItem>
            </UnorderedList>
          </PageContent>
        </main>
      </UtrechtDocument>
    </>
  );
}
