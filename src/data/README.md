# Notities voor data types

## Voornaam

Voornaam (of "Voornam(en)" of "Voornaam (1 of meerdere)" of "Voornaam of voornamen"?) De "1 of meerdere"
variant werkt voor screenreaders, Nederlands B1 en Google Translate Opmerking: Is alleen "Voornamen"
onduidelijk voor mensen met maar 1 voornaam? Hoe zit het met mensen zonder voornaam?

## Achternaam

Achternaam (of "Achternaam of achternamen (of "Achternaam (1 of meerdere)" Mijn Overheid, basis
registratie personen: "De geslachtsnaam is hetzelfde als de achternaam. Heeft de geslachtsnaam een
voorvoegsel, zoals “de” of “van”? Dan is het voorvoegsel vermeld bij Voorvoegsels geslachtsnaam"

## Voorletters

Voorletters Opmerking: Hoe moeten deze ingevoerd worden? Gescheiden door spaties, punten, moet er wel
validatie op? Geen autoComplete, niet in definititie van basis registratie personen Voorlopige conclusie:
Vermijd voorletters

## Tussenvoegsels

Tussenvoegsels naam Opmerking: Waarom horen deze niet bij de achternaam? Wat als een achternaam uit 2
delen bestaat en het tweede deel ook voorvoegsels heeft? "de Vries - de Boer" Weetje dat belgische
achtnamen niet dezelfde regels kennen voor hoofdletters. Een nederlandse "van der Valk" wordt daar "Van
Der Valk". Geen autoComplete

## Naam (in authentiek schrift)

Naam in origineel schrift Opmerking: waarom? Wanneer gebruiken, hoe zorg je dat dit niet in de andere naam
velden is ingevoerd? Geen autoComplete? Of hoe weten we dat dit niet gecomplete wordt in origineel
schrift?

## Aanspreekvorm

Aanspreekvorm / mogelijke titulatuur TODO: Richtlijnen Wanneer gebruiken? Hoe valt deze samen met gender?
Is een vrij invoerveld zodat alle soorten titulatuur en combinaties door de persoon zelf gekozen kunnen
worden.

## Geslacht

Geslacht (M/V/NB/onbekend) Opmerking: Basis registratie ondersteund 'M/V/onbekend' Gemeente Amsterdam zegt
vermijdt 'select' voor weinig (hoeveel is weinig?) options. Als we aannemen dat 3 weinig is, dan dus geen
select gebruiken. TODO: richtlijnen wanneer geslacht wel/niet nodig is.

## Geboortedatum

Geboortedatum Opmerking: Wordt vaak opgelost met een date picker, maar die zijn lang niet altijd
bruikbaar. TODO: richtlijnen voor welke (meerdere?) types input bruikbaar zijn

## BSN

BSN Opmerking: is bsn voor iedereen goed te begrijpen, wanneer te gebruiken. Moet het gebruikt worden
samen met een uitleg waar je deze kan vinden bijvoorbeeld?

## E-mailadres

E-mailadres (vaak verplicht omdat het verplicht is een bevestiging te sturen - heb je er zelf geen dan van
iemand anders) Opmerking: waarschijnlijk wil je dit niet al te veel valideren, er zijn veel valide opties
binnen e-mail adressen. TODO: opnemen in richtlijnen.

## Telefoonnummer

Telefoonnummer Opmerking: als je het verplicht maakt, dan is het niet accessible, want wat als je niet kan
opnemen/horen? TODO: richtlijnen Opmerking: wat als je internationale nummers moet ondersteunen? Mag +,
misschien niet teveel validatie? Todo: testen of losse velden voor mobiel/vast nummer nog nuttig zijn en
de uitkomst documenteren Daarnaast heeft lang niet iedereen meer een vast nummer, en wel mobiel. Wil je na
het formulier een bevestiging sturen? Dan is misschien mobiel belangrijker dan 'telefoonnummer'.

### Telefoonnummer overdag/'s avonds

Telefoon overdag / 's avonds -- vaak genoemd in formulieren workshop Opmerking: wordt gebruikgt in plaats
van tel-mobile en tel?

## Adres

Adres - Postcode -- als eerste omdat de validatie/invullen van het adres hier op gebaseerd kunnen worden.
TODO richtlijnen validatie (irritante whitespace contraints voorkomen) - Huisnummer -- als tweede omdat
het samen met postcode in nederland tot een uniek adres leidt. Kent geen autoComplete, potentieel minder
gebruiksvriendelijk dan een algemeen adres veld. - Huisnummer letter (helemaal los van 'toevoeging' in
steden zoals Den Haag) Kadestraal nummer bijvoorbeeld 24 en 24a zijn los gesplitste panden geworden? TODO:
UITZOEKEN - Huisnummer toevoeging (bijvoorbeeld verdieping) BV 24b 3v ? - Straatnaam -- geen autocompleet
voor straatnaam zonder huisnummer - Woonplaats -- geen autoComplete - Gemeente -- geen autoComplete heel
nederland specifiek, guidelines nodig wanneer deze te gebruiken - Land Opmerking formulieren workshop:
autoComplete Nederlands adres op basis van postcode Meerdere adressen mogelijk: Postadres, Briefadres /
Woonadres / Factuuradres / Overweeg deze optioneel te maken zodat óf deze óf de locatiebeschrijving kan
worden ingevuld.

## Locatiebeschrijving

Locatie beschrijving Te gebruiken als iemand geen adres hebt/weet? Bijvoorbeeld "melden overlast" Vrij
invoerveld voor locatie: "onder brug tegenover Albert Heijn" / gebruik maken van locatie device?

## KvK nummer

KvK nummer Opmerking: Is hier standaard validatie voor? Kan op basis van KvK nummer de bedrijfsnaam worden getoond?

## Akkoord voor dataverwerking

Checkbox voor akkoord gegevensverwerking Opmerking: wanneer toegevoegd is hij waarschijnlijk required.
Moeten we richtlijnen toevoegen wanneer deze toegevoegd dient te worden?
