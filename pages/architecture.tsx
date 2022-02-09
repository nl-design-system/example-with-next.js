import { useTranslation } from "react-i18next";
import { DocumentationPage } from "../src/components/DocumentationPage";
import { getMarkdownHTML } from "../src/markdown";

interface Props {
  html: string;
}

export const getStaticProps = async () => ({
  props: {
    html: await getMarkdownHTML("architecture"),
  },
});

export default function ArchitecturePage({ html }: Props) {
  const { t } = useTranslation(["common"]);
  return (
    <DocumentationPage title="Architecture" t={t}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DocumentationPage>
  );
}
