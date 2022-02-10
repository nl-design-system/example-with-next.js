import { HTML, Heading2 } from "../../src/components/utrecht";

interface Props {
  html: string;
  t: (key: string) => string;
}

export default function FormInputPostcodeDocs({ html }: Props) {
  return (
    <>
      <HTML dangerouslySetInnerHTML={{ __html: html }} />
      <Heading2>Voorbeeld</Heading2>
    </>
  );
}

FormInputPostcodeDocs.slug = "postcode";
FormInputPostcodeDocs.title = "Postcode";
FormInputPostcodeDocs.markdown = "./public/docs/postcode.md";
