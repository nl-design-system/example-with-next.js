import { HTML } from "../../src/components/utrecht";

interface Props {
  html: string;
  t: (key: string) => string;
}

export default function FormInputVoornaamDocs({ html }: Props) {
  return (
    <>
      <HTML dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

FormInputVoornaamDocs.title = "Voornaam / Voornamen";
FormInputVoornaamDocs.slug = "voornaam";
FormInputVoornaamDocs.markdown = "./public/docs/voornamen.md";
