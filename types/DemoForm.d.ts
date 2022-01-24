import { CommercialDetails } from './CommercialDetails';
import { ContactDetails } from './ContactDetails';
import { FinancialDetails } from './FinancialDetails';
import { PersonalDetails } from './PersonalDetails';
import { ForeignAddress } from './ForeignAddress';

export interface DemoFormInput
  extends PersonalDetails,
    ContactDetails,
    FinancialDetails,
    CommercialDetails,
    ForeignAddress {}

export interface DemoFormChecked {
  'accept-data-handling': boolean;
  'subscribe-newsletter': boolean;
}

export type DemoForm = DemoFormInput & DemoFormChecked;
