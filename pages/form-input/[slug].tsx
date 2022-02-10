import { useRouter } from "next/router";
import { DocumentationPage } from "../../src/components/DocumentationPage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FormInputEmailDocs from "./FormInputEmailDocs";
import FormInputHuisnummerDocs from "./FormInputHuisnummerDocs";
import FormInputPostcodeDocs from "./FormInputPostcodeDocs";
import FormInputTussenvoegselsDocs from "./FormInputTussenvoegselsDocs";
import FormInputVoornaamDocs from "./FormInputVoornaamDocs";

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["form", "common"])),
  },
});

export default function FormInputEmailDocumentation() {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation(["form", "common"]);

  const pages = [
    FormInputEmailDocs,
    FormInputHuisnummerDocs,
    FormInputPostcodeDocs,
    FormInputVoornaamDocs,
    FormInputTussenvoegselsDocs,
  ];

  const Page = pages.find((page) => page.slug === slug);

  if (Page) {
    return (
      <DocumentationPage title={Page.title} t={t}>
        <Page t={t} />
      </DocumentationPage>
    );
  } else {
    return "404";
  }
}
