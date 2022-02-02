import { Paragraph, Heading1, Heading2 } from "../../src/components/utrecht";

export function FormInputPostcodeDocs() {
  return (
    <>
      <Heading1>Postcode</Heading1>
      <Paragraph>
        Deze pagina gaat over een invoer van een Nederlandse postcode, er is nog geen pagina over invoer van Europese of
        buitenlandse adressen.
      </Paragraph>
      <Heading2>Validatie</Heading2>
      <Paragraph>
        Een Nederlandse postcode bestaat uit 4 cijfers, één spatie en 2 letters. De autoriteit van postcodes lijkt
        PostNL te zijn, maar we hebben nog geen officiële documentatie gevonden over het formaat van de postcode.
        Bijvoorbeeld: officiëel wel of géén spatie?
      </Paragraph>
      <Paragraph>
        Invoerlengte: 7 tekens voor het formaat mét spatie. Wanneer de spatie niet werkt voor achterliggende systemen,
        adviseren we de spatie geautomatiseerd weg te halen en deze handeling niet aan de gebruiker over te laten.
      </Paragraph>
      <Paragraph>
        Hoofdlettergevoelig: het advies is om de invoer automatisch naar hoofdletters te converteren, en dit niet aan de
        gebruiker over te laten.
      </Paragraph>
      <Paragraph>
        Tekens die zijn toegestaan: er is een reguliere expressie mogelijk. Bijvoorbeeld:
        <code>{"[0-9]{4}\\s?[A-Za-z]{2}"}</code>
      </Paragraph>
      <Paragraph>
        Normalisatie: whitespace weghalen, naar hoofdletters omzetten, eventueel spatie invoegen tussen cijfers en
        letters.
      </Paragraph>
      <Heading2>Design</Heading2>
      <Paragraph>
        Visuele lengte van invoerveld: ruimte voor 7 tekens. Bijvoorbeeld: <code>7em</code>.
      </Paragraph>
      <Heading2>Autocomplete</Heading2>
      <Paragraph>
        Gebruik voor HTML: <code>autocomplete="postal-code"</code>.
      </Paragraph>
      <Heading2>Voorbeeld</Heading2>
      <Paragraph>TODO</Paragraph>
    </>
  );
}

FormInputPostcodeDocs.slug = "postcode";
FormInputPostcodeDocs.title = "Postcode";
