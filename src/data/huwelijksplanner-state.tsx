interface BSN {
  bsn: string;
}

interface GivenName {
  "given-name": string;
}

interface FamilyName {
  "family-name": string;
}

interface FamilyNamePrefix {
  "family-name-prefix": string;
}

interface DateOfBirth {
  bday: string;
}

interface PlaceOfBirth {
  "place-of-birth": string;
}

interface Street {
  street: string;
}

interface HouseNumber {
  "house-number": string;
}
interface HouseLetter {
  "house-number-letter": string;
}
interface HouseNumberSuffix {
  "house-number-suffix": string;
}
interface PostalCode {
  "postal-code": string;
}
interface PlaceOfResidence {
  "place-of-residence": string;
}
interface TelephoneNumber {
  tel: string;
}
interface Email {
  email: string;
}
interface Salutation {
  salutation: string;
}
interface Name {
  name: string;
}
interface IndicatieCurateleRegister {
  "indicatie-curateleregister": number;
}

interface Invitee extends Email, Name {}

// TODO:
// Indicatie curateleregister
// Burgerlijke staat
//

export interface HuwelijksplannerPartner
  extends Partial<BSN>,
    Partial<GivenName>,
    Partial<FamilyName>,
    Partial<FamilyNamePrefix>,
    Partial<DateOfBirth>,
    Partial<PlaceOfResidence>,
    Partial<Street>,
    Partial<HouseNumber>,
    Partial<HouseLetter>,
    Partial<HouseNumberSuffix>,
    Partial<PostalCode>,
    Partial<PlaceOfResidence>,
    Partial<PlaceOfBirth>,
    Partial<TelephoneNumber>,
    Partial<Email>,
    Partial<Salutation>,
    Partial<IndicatieCurateleRegister> {
  "marital-status"?: string;
}

interface TODO {
  partnerInvitation: Invitee;
  partner1: HuwelijksplannerPartner;
  partner2: HuwelijksplannerPartner;
  legalWitness1: Invitee;
  legalWitness2: Invitee;
  legalWitness3: Invitee;
  legalWitness4: Invitee;
  "ceremony-type": string;
  "ceremony-location": string;
  "ceremony-start": string;
  "ceremony-end": string;
  "ceremony-price": string;
  "registration-type": string;
}

export interface HuwelijksplannerState extends TODO {}

export interface HuwelijksplannerInput extends Partial<TODO> {}

export const exampleState: HuwelijksplannerState = {
  partnerInvitation: {
    name: "Libby Lables",
    email: "libby+labels@example.com",
  },
  partner1: {
    "given-name": "Bobby",
    "family-name": "Tables",
    "family-name-prefix": "on the",
    bday: "2001-02-03",
    bsn: "123456789",
    email: "btables@hotcakes.com",
    tel: "02012345678",
    "postal-code": "4242BT",
    "house-number": "21",
    "house-number-letter": "Z",
    "house-number-suffix": "achterste voren",
    street: "Wasstraat",
    "place-of-residence": "Groet",
    "place-of-birth": "Groet",
    salutation: "De heer",
    "indicatie-curateleregister": 0,
    "marital-status": "",
  },
  partner2: {
    "given-name": "Libby",
    "family-name": "Lables",
    "family-name-prefix": "",
    bday: "2001-02-03",
    bsn: "987654321",
    email: "libby+lables@example.com",
    tel: "02012345678",
    "postal-code": "4242BT",
    "house-number": "21",
    "house-number-letter": "Z",
    "house-number-suffix": "achterste voren",
    street: "Wasstraat",
    "place-of-residence": "Groet",
    "place-of-birth": "Groet",
    salutation: "Mevrouw",
    "indicatie-curateleregister": 0,
    "marital-status": "",
  },
  "registration-type": "Huwelijk",
  "ceremony-type": "Eenvoudig huwelijk",
  "ceremony-start": "2021-04-14T09:00+01:00",
  "ceremony-end": "2021-04-14T09:10+01:00",
  "ceremony-location": "Locatie Stadskantoor",
  "ceremony-price": "EUR 168",
};
