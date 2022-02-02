import { Paragraph, Heading1, Heading2 } from "../../src/components/utrecht";
import { ExampleBox } from "../../src/components";
import { useState } from "react";
import { InputHouseNumber } from "../../src/components/input";

export const HouseNumberExample = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <InputHouseNumber
        id="house-number"
        name="house-number"
        maxLength={5}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></InputHouseNumber>
    </>
  );
};

export function FormInputHuisnummerDocs() {
  return (
    <>
      <Heading1>Huisnummer</Heading1>
      <Paragraph>
        Deze pagina gaat over de invoer van het nummer gedeelte, dat komt na de straatnaam en komt voor de huisletter en
        eventuele toevoeging op het huisnummer. Deze pagina gaat alleen over huisnummers in Nederland, voor adressen in
        het buitenland hebben we geen documentatie.
      </Paragraph>
      <Heading2>Validatie</Heading2>
      <Paragraph>
        Het BRP houdt een maximumlengte aan van 5 cijfers, waarmee het hoogst mogelijk huisnummer 99999 is.
      </Paragraph>
      <Paragraph>
        Gebruik je een korter maximum, bijvoorbeeld <code>maxlength="4"</code>, dan levert dat problemen op voor hoge
        huisnummers die in Nederland voorkomen.
      </Paragraph>
      <Paragraph>
        Het huisnummer is numeriek, toevoegingen op het huisnummer worden meestal apart ingevuld en opgeslagen.
      </Paragraph>
      <Heading2>Autocomplete</Heading2>
      <Paragraph>
        Gebruik in HTML: <code>autocomplete="house-number"</code>
      </Paragraph>
      <Paragraph>
        Om een numeriek toetsenbord te krijgen (op bijvoorbeeld een mobiele telefoon), kun je in HTML het volgende
        gebruiken: <code>inputMode="numeric"</code>. Dan is <code>type="number"</code> gebruiken niet nodig, want een
        spinner voor een huisnummer invoeren is niet erg handig.
      </Paragraph>
      <Heading2>Voorbeeld</Heading2>
      <ExampleBox>
        <HouseNumberExample />
      </ExampleBox>
    </>
  );
}

FormInputHuisnummerDocs.slug = "huisnummer";
FormInputHuisnummerDocs.title = "Huisnummer";
