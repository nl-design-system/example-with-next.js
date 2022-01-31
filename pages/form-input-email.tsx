/* eslint-disable react/no-unescaped-entities */
import { useState, PropsWithChildren } from "react";
import { Paragraph, Heading1, Heading2 } from "../src/components/utrecht";
import { DocumentationPage } from "../src/components/DocumentationPage";
import { InputEmail } from "../src/components/input";
import { DataListValue } from "../src/components";
import { useTranslation } from "next-i18next";

const Example = ({ children }: PropsWithChildren<{}>) => <div className="example">{children}</div>;

const InputEmailExample = () => {
  const { t } = useTranslation("form");
  const [value, setValue] = useState<string>("");
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

export default function () {
  return (
    <DocumentationPage title="E-mailadres">
      <Heading1>E-mailadres</Heading1>
      <Heading2>Validatie</Heading2>
      <Paragraph>
        Door gebruik te maken van <code>&lt;input type="email"&gt;</code> kan de browser al helpen om te controleren of
        de notitie een correct e-mailadres is.
      </Paragraph>
      <Heading2>Design</Heading2>
      <Paragraph>Visuele lengte van invoerveld: standaard-lengte.</Paragraph>
      <Paragraph>
        Gebruik een lettertype zonder ligaturen om ambiguiteit te vermijden. Met CSS kan dat met:{" "}
        <code>font-variant-ligatures: none;</code>
      </Paragraph>
      <Heading2>Autocomplete</Heading2>
      <Paragraph>
        Gebruik voor HTML: <code>&lt;input type="email" autocomplete="email"&gt;</code>
      </Paragraph>
      <Heading2>Voorbeeld</Heading2>
      <Example>
        <InputEmailExample />
      </Example>
    </DocumentationPage>
  );
}
