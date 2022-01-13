import { CommercialDetails } from './CommercialDetails';
import { ContactDetails } from './ContactDetails';
import { FinancialDetails } from './FinancialDetails';
import { PersonalDetails } from './PersonalDetails';

export interface DemoForm extends PersonalDetails, ContactDetails, FinancialDetails, CommercialDetails {
  'accept-data-handling': boolean;
  'subscribe-newsletter': boolean;
}
