<!-- @license CC0-1.0 -->

# E-mailadres

## Validatie

Door gebruik te maken van `<input type="email">` kan de browser al helpen om te controleren of de notitie een correct e-mailadres is.

Wacht met validatie tot de gebruiker de kans heeft gehad de invoer compleet te krijgen. Bijvoorbeeld: laat niet gelijk bij de eerste invoer de melding zien dat het apenstaartje nog ontbreekt.

## Design

Visuele lengte van invoerveld: standaard-lengte.

Gebruik een lettertype zonder ligaturen om ambiguiteit te vermijden. Met CSS kan dat met: `font-variant-ligatures: none;`

Door `type="email"` te gebruiken kan de browser een op touchscreens een aangepast toetsenbord aanbieden voor e-mailadressen.

## Autocomplete

Gebruik voor HTML: `autocomplete="email"`

## Content

Vraag alleen om gegevens als ze echt nodig zijn, en laat dan weten waarvoor de informatie nodig is. Bijvoorbeeld: "We sturen je een bevestiging naar dit e-mailadres."
