<!-- @license CC0-1.0 -->

# Huisnummer

Deze pagina gaat over de invoer van het nummer gedeelte, dat komt na de straatnaam en komt voor de huisletter en eventuele toevoeging op het huisnummer. Deze pagina gaat alleen over huisnummers in Nederland, voor adressen in het buitenland hebben we geen documentatie.

## Validatie

Het BRP houdt een maximumlengte aan van 5 cijfers, waarmee het hoogst mogelijk huisnummer 99999 is.

Gebruik je een korter maximum, bijvoorbeeld `maxlength="4"`, dan levert dat problemen op voor hoge huisnummers die in Nederland voorkomen.

Het huisnummer is numeriek, toevoegingen op het huisnummer worden meestal apart ingevuld en opgeslagen.

# Autocomplete

Gebruik in HTML: `autocomplete="house-number"`

Om een numeriek toetsenbord te krijgen (op bijvoorbeeld een mobiele telefoon), kun je in HTML het volgende gebruiken: `inputMode="numeric"`. Dan is `type="number"` gebruiken niet nodig, want een spinner voor een huisnummer invoeren is niet erg handig.
