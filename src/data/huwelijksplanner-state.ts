export interface BSN {
  bsn: string;
}

export interface GivenName {
  'given-name': string;
}

export interface FamilyName {
  'family-name': string;
}

export interface FamilyNamePrefix {
  'family-name-prefix': string;
}

export interface DateOfBirth {
  bday: string;
}

export interface PlaceOfBirth {
  'place-of-birth': string;
}

export interface Street {
  street: string;
}

export interface HouseNumber {
  'house-number': string;
}
export interface HouseLetter {
  'house-number-letter': string;
}
export interface HouseNumberSuffix {
  'house-number-suffix': string;
}
export interface PostalCode {
  'postal-code': string;
}
export interface PlaceOfResidence {
  'place-of-residence': string;
}
export interface TelephoneNumber {
  tel: string;
}
export interface Email {
  email: string;
}
export interface Salutation {
  salutation: string;
}
export interface Name {
  name: string;
}
export interface IndicatieCurateleRegister {
  'indicatie-curateleregister': number;
}

export interface Invitee extends Email, Name {}

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
  'marital-status'?: string;
}

export interface Reservation {
  expiry: string;
  'ceremony-type': string;
  'ceremony-start': string;
  'ceremony-end': string;
  'ceremony-location': string;
  'ceremony-price-currency': string;
  'ceremony-price-amount': string;
}

export interface TODO {
  partnerInvitation: Invitee;
  partner1: HuwelijksplannerPartner;
  partner2: HuwelijksplannerPartner;
  legalWitness1: Invitee;
  legalWitness2: Invitee;
  legalWitness3: Invitee;
  legalWitness4: Invitee;
  'ceremony-type': string;
  'ceremony-location': string;
  'ceremony-start': string;
  'ceremony-end': string;
  'ceremony-price': string;
  'registration-type': string;
  reservation?: Reservation;
}

export interface HuwelijksplannerState extends TODO {}

export interface HuwelijksplannerInput extends Partial<TODO> {}

export const exampleState: HuwelijksplannerState = {
  partnerInvitation: {
    name: 'Libby Lables',
    email: 'libby+labels@example.com',
  },
  partner1: {
    'given-name': 'Bobby',
    'family-name': 'Tables',
    'family-name-prefix': 'on the',
    bday: '2001-02-03',
    bsn: '123456789',
    email: 'btables@hotcakes.com',
    tel: '02012345678',
    'postal-code': '4242BT',
    'house-number': '21',
    'house-number-letter': 'Z',
    'house-number-suffix': 'achterste voren',
    street: 'Wasstraat',
    'place-of-residence': 'Groet',
    'place-of-birth': 'Groet',
    salutation: 'De heer',
    'indicatie-curateleregister': 0,
    'marital-status': '',
  },
  partner2: {
    'given-name': 'Libby',
    'family-name': 'Lables',
    'family-name-prefix': '',
    bday: '2001-02-03',
    bsn: '987654321',
    email: 'libby+lables@example.com',
    tel: '02012345678',
    'postal-code': '4242BT',
    'house-number': '21',
    'house-number-letter': 'Z',
    'house-number-suffix': 'achterste voren',
    street: 'Wasstraat',
    'place-of-residence': 'Groet',
    'place-of-birth': 'Groet',
    salutation: 'Mevrouw',
    'indicatie-curateleregister': 0,
    'marital-status': '',
  },
  reservation: {
    expiry: 'FIXME: over 2 uur',
    'ceremony-type': 'Eenvoudig huwelijk',
    'ceremony-start': '2021-04-14T09:00+01:00',
    'ceremony-end': '2021-04-14T09:10+01:00',
    'ceremony-location': 'Locatie Stadskantoor',
    'ceremony-price-currency': 'EUR',
    'ceremony-price-amount': '168',
  },
  'registration-type': 'Huwelijk',
  'ceremony-type': 'Eenvoudig huwelijk',
  'ceremony-start': '2021-04-14T09:00+01:00',
  'ceremony-end': '2021-04-14T09:10+01:00',
  'ceremony-location': 'Locatie Stadskantoor',
  'ceremony-price': 'EUR 168',
  legalWitness1: {
    name: '',
    email: '',
  },
  legalWitness2: {
    name: '',
    email: '',
  },
  legalWitness3: {
    name: '',
    email: '',
  },
  legalWitness4: {
    name: '',
    email: '',
  },
};
