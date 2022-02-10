import { Heading2, HTML } from "../../src/components/utrecht";
import { useState } from "react";
import { InputEmail } from "../../src/components/input";
import { DataListValue, ExampleBox } from "../../src/components";

interface Props {
  html: string;
  t: (key: string) => string;
}

const InputEmailExample = ({ t }: { t: (key: string) => string }) => {
  const [value, setValue] = useState<string>("");
  t = t || ((key: string) => key);
  return (
    <>
      <InputEmail
        id="email"
        name="email"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <dl>
        <dt>{t("email")}</dt>
        <DataListValue value={value} emptyDescription="-" className="data-list-value--email">
          {value}
        </DataListValue>
      </dl>
    </>
  );
};

export default function FormInputEmailDocs({ t, html }: Props) {
  return (
    <>
      <HTML dangerouslySetInnerHTML={{ __html: html }} />
      <Heading2>Voorbeeld</Heading2>
      <ExampleBox>
        <InputEmailExample t={t} />
      </ExampleBox>
    </>
  );
}

FormInputEmailDocs.slug = "email";
FormInputEmailDocs.title = "E-mailadres";
FormInputEmailDocs.markdown = "./public/docs/email.md";
