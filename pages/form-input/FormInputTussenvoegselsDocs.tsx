import { HTML } from "../../src/components/utrecht";

interface Props {
  html: string;
  t: (key: string) => string;
}

export default function FormInputTussenvoegselsDocs({ html }: Props) {
  console.log("html", html);
  return (
    <>
      <HTML dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

FormInputTussenvoegselsDocs.title = "Tussenvoegsels";
FormInputTussenvoegselsDocs.slug = "tussenvoegsels";
FormInputTussenvoegselsDocs.markdown = "./public/docs/tussenvoegsels.md";
