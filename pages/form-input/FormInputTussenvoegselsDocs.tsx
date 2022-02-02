import { Paragraph, Heading1, Heading2, Link } from "../../src/components/utrecht";

export function FormInputTussenvoegselsDocs() {
  return (
    <>
      <Heading1>Tussenvoegsels</Heading1>
      <Heading2>Validatie</Heading2>
      <Paragraph>
        De Rijksdienst voor Identiteitsgegevens publiceert een tabel van erkende voorvoegsels, als onderdeel van{" "}
        <Link href="https://publicaties.rvig.nl/Landelijke_tabellen">Landelijke tabellen BRP</Link>.
      </Paragraph>
      <Paragraph>
        Het is mogelijk voorvoegsels te valideren aan de hand van deze <i lang="en">allow list</i>.
      </Paragraph>
      <Paragraph>
        Meer in algemene zin geldt: de korste voorvoegsel is 1 teken lang, de langste voorvoegsel is 10 tekens lang,
        voorvoegsels bevatten letters, spaties en het apostrofteken.
      </Paragraph>
      <Paragraph>Net als andere onderdelen van de naam is dit veld hoofdlettergevoelig.</Paragraph>
      <Paragraph>
        Een reguliere expressie die alle voorvoegels uit de{" "}
        <Link href="https://publicaties.rvig.nl/Landelijke_tabellen/Landelijke_tabellen_32_t_m_61_excl_tabel_35/Landelijke_Tabellen_32_t_m_61_in_csv_formaat/Tabel_36_Voorvoegsels">
          <cite>Tabel 36 Voorvoegsels 19 februari 2015</cite>
        </Link>{" "}
        accepteert is bijvoorbeeld: <code>{"[A-Za-z' ]{1,10}"}</code>
      </Paragraph>
      <Heading2>Design</Heading2>
      <Paragraph>De invoer moet ruimte bieden voor ten minste 10 tekens.</Paragraph>
      <Heading2>Autocomplete</Heading2>
      <Paragraph>
        Voor tussenvoegsels is geen optie voor <code>autocomplete</code> in HTML, tussenvoegsel is onderdeel van{" "}
        <code>autocomplete="family-name"</code>.
      </Paragraph>
    </>
  );
}

FormInputTussenvoegselsDocs.title = "Tussenvoegsels";
FormInputTussenvoegselsDocs.slug = "tussenvoegsels";
