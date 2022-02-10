import { useRouter } from "next/router";
import { DocumentationPage } from "../../src/components/DocumentationPage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getMarkdownHTML } from "../../src/markdown";
import FormInputEmailDocs from "./FormInputEmailDocs";
import FormInputHuisnummerDocs from "./FormInputHuisnummerDocs";
import FormInputPostcodeDocs from "./FormInputPostcodeDocs";
import FormInputTussenvoegselsDocs from "./FormInputTussenvoegselsDocs";
import FormInputVoornaamDocs from "./FormInputVoornaamDocs";

interface Props {
  pageData: {
    slug: string;
    html: string;
  };
}

const pages = [
  FormInputEmailDocs,
  FormInputHuisnummerDocs,
  FormInputPostcodeDocs,
  FormInputVoornaamDocs,
  FormInputTussenvoegselsDocs,
];

export async function getStaticPaths() {
  const paths = pages.map((page) => ({
    params: {
      slug: page.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ locale, params: { slug } }: { locale: string; params: { slug: string } }) => {
  const page = pages.find((page) => page.slug === slug);

  const pageData = {
    slug: page?.slug || "",
    html: page?.markdown ? await getMarkdownHTML(page.markdown) : "",
  };

  const props: Props = {
    ...(await serverSideTranslations(locale, ["form", "common"])),
    pageData,
  };

  return {
    props,
  };
};

export default function FormInputEmailDocumentation({ pageData: { html } }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation(["form", "common"]);

  const Page = pages.find((page) => page.slug === slug);

  if (Page) {
    return (
      <DocumentationPage title={Page.title} t={t}>
        <Page t={t} html={html} />
      </DocumentationPage>
    );
  } else {
    return "404";
  }
}
