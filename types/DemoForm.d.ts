import { CommercialDetails } from './CommercialDetails';
import { ContactDetails } from './ContactDetails';
import { FinancialDetails } from './FinancialDetails';
import { PersonalDetails } from './PersonalDetails';

export interface DemoFormInput extends PersonalDetails, ContactDetails, FinancialDetails, CommercialDetails {}
export interface DemoFormChecked {
  'accept-data-handling': boolean;
  'subscribe-newsletter': boolean;
}

export type DemoForm = DemoFormInput & DemoFormChecked;
