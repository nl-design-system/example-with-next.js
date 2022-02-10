# Postcode

Deze pagina gaat over een invoer van een Nederlandse postcode, er is nog geen pagina over invoer van Europese of buitenlandse adressen.

## Validatie

Een Nederlandse postcode bestaat uit 4 cijfers, één spatie en 2 letters. De autoriteit van postcodes lijkt PostNL te zijn, maar we hebben nog geen officiële documentatie gevonden over het formaat van de postcode. Bijvoorbeeld: officiëel wel of géén spatie?

Invoerlengte: 7 tekens voor het formaat mét spatie. Wanneer de spatie niet werkt voor achterliggende systemen, adviseren we de spatie geautomatiseerd weg te halen en deze handeling niet aan de gebruiker over te laten.

Hoofdlettergevoelig: het advies is om de invoer automatisch naar hoofdletters te converteren, en dit niet aan de gebruiker over te laten.

Tekens die zijn toegestaan: er is een reguliere expressie mogelijk. Bijvoorbeeld: `[0-9]{4}\s?[A-Za-z]{2}`

Normalisatie: whitespace weghalen, naar hoofdletters omzetten, eventueel spatie invoegen tussen cijfers en letters.

## Design

Visuele lengte van invoerveld: ruimte voor 7 tekens. Bijvoorbeeld: `7em`.

## Autocomplete

Gebruik voor HTML: `autocomplete="postal-code"`.
