import { Paragraph, Heading1, Heading2 } from "../src/components/utrecht";
import { DocumentationPage } from "../src/components/DocumentationPage";

export default function FormInputVoornaamDocumentation() {
  return (
    <DocumentationPage title="Voornaam / Voornamen">
      <Heading1>Voornaam / Voornamen</Heading1>
      <Heading2>Validatie</Heading2>
      <Paragraph>
        Invoerlengte: in BRP is de maximumlengte 200 tekens, dus om elke naam uit het BRP te kunnen invoeren moet
        tenminste 200 tekens zijn toegestaan.
      </Paragraph>
      <Paragraph>
        Tekens die zijn toegestaan: alle tekens die in Teletex zijn toegestaan. In Teletex zijn ook leestekens
        toegestaan, waarschijnlijk handig om een waarschuwing te tonen.
      </Paragraph>
      <Heading2>Design</Heading2>
      <Paragraph>Lengte van invoerveld: nog te bepalen.</Paragraph>
      <Heading2>Autocomplete</Heading2>
      <Paragraph>
        Voor het veld "Voornaam" gebruik je in HTML: <code>autocomplete="given-name"</code>. Voor het veld "Voornamen"
        is er geen equivalent in HTML, omdat <code>given-name</code> en <code>additional-names</code> zijn opgesplitst.
      </Paragraph>
      <Heading2>Content</Heading2>
      <Paragraph>Voornaam of voornamen? Nog uitzoeken.</Paragraph>
    </DocumentationPage>
  );
}
