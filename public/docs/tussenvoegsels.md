<!-- @license CC0-1.0 -->

# Tussenvoegsels

## Validatie

De Rijksdienst voor Identiteitsgegevens publiceert een tabel van erkende voorvoegsels, als onderdeel van [Landelijke
tabellen BRP](https://publicaties.rvig.nl/Landelijke_tabellen).

Het is mogelijk voorvoegsels te valideren aan de hand van deze <i lang="en">allow list</i>.

Meer in algemene zin geldt: de korste voorvoegsel is 1 teken lang, de langste voorvoegsel is 10 tekens lang, voorvoegsels bevatten letters, spaties en het apostrofteken.

Net als andere onderdelen van de naam is dit veld hoofdlettergevoelig.

Een reguliere expressie die alle voorvoegels uit de [<cite>Tabel 36 Voorvoegsels 19 februari 2015</cite>](https://publicaties.rvig.nl/Landelijke_tabellen/Landelijke_tabellen_32_t_m_61_excl_tabel_35/Landelijke_Tabellen_32_t_m_61_in_csv_formaat/Tabel_36_Voorvoegsels) accepteert is bijvoorbeeld: `[A-Za-z' ]{1,10}`

## Design

De invoer moet ruimte bieden voor ten minste 10 tekens.

## Autocomplete

Voor tussenvoegsels is geen optie voor `autocomplete` in HTML, tussenvoegsel is onderdeel van `autocomplete="family-name"`.
