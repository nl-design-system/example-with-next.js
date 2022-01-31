/* eslint-disable react/no-unescaped-entities */
import { Paragraph, Heading1, Heading2 } from "../src/components/utrecht";
import { DocumentationPage } from "../src/components/DocumentationPage";

export default function () {
  return (
    <DocumentationPage title="Huisnummer">
      <Heading1>Huisnummer</Heading1>
      <Paragraph>
        Deze pagina gaat over de invoer van het nummer gedeelte, dat komt na de straatnaam en komt voor de huisletter en
        eventuele toevoeging op het huisnummer.
      </Paragraph>
      <Heading2>Validatie</Heading2>
      <Paragraph>
        Het BRP houdt een maximumlengte aan van 5 cijfers, waarmee het hoogst mogelijk huisnummer 99999 is.
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
    </DocumentationPage>
  );
}
