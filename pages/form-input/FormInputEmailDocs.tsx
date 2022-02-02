import { Paragraph, Heading1, Heading2 } from "../../src/components/utrecht";
import { useState } from "react";
import { InputEmail } from "../../src/components/input";
import { DataListValue, ExampleBox } from "../../src/components";

const InputEmailExample = ({ t }: { t: (key: string) => string }) => {
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

export const FormInputEmailDocs = ({ t }: { t: (key: string) => string }) => (
  <>
    <Heading1>E-mailadres</Heading1>
    <Heading2>Validatie</Heading2>
    <Paragraph>
      Door gebruik te maken van <code>&lt;input type="email"&gt;</code> kan de browser al helpen om te controleren of de
      notitie een correct e-mailadres is.
    </Paragraph>
    <Paragraph>
      Wacht met validatie tot de gebruiker de kans heeft gehad de invoer compleet te krijgen. Bijvoorbeeld: laat niet
      gelijk bij de eerste invoer de melding zien dat het apenstaartje nog ontbreekt.
    </Paragraph>
    <Heading2>Design</Heading2>
    <Paragraph>Visuele lengte van invoerveld: standaard-lengte.</Paragraph>
    <Paragraph>
      Gebruik een lettertype zonder ligaturen om ambiguiteit te vermijden. Met CSS kan dat met:{" "}
      <code>font-variant-ligatures: none;</code>
    </Paragraph>
    <Paragraph>
      Door <code>type="email"</code> te gebruiken kan de browser een op touchscreens een aangepast toetsenbord aanbieden
      voor e-mailadressen.
    </Paragraph>
    <Heading2>Autocomplete</Heading2>
    <Paragraph>
      Gebruik voor HTML: <code>autocomplete="email"</code>
    </Paragraph>
    <Heading2>Content</Heading2>
    <Paragraph>
      Vraag alleen om gegevens als ze echt nodig zijn, en laat dan weten waarvoor de informatie nodig is. Bijvoorbeeld:
      "We sturen je een bevestiging naar dit e-mailadres."
    </Paragraph>
    <Heading2>Voorbeeld</Heading2>
    <ExampleBox>
      <InputEmailExample t={t} />
    </ExampleBox>
  </>
);

FormInputEmailDocs.slug = "email";
FormInputEmailDocs.title = "E-mailadres";
