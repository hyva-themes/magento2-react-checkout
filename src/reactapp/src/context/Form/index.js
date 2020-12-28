import BillingAddressFormMan from './BillingAddress/BillingAddressFormManager';
import GuestEmailMan from './GuestEmail/GuestEmailFormManager';
import ShippingAddressFormMan from './ShippingAddress/ShippingAddressFormManager';
import FormStepProvider from './Step/StepProvider';

import BillingAddressFormCxt from './BillingAddress/BillingAddressFormContext';
import GuestEmailFormCxt from './GuestEmail/GuestEmailFormContext';
import ShippingAddressFormCxt from './ShippingAddress/ShippingAddressFormContext';
import FormStepCxt from './Step/StepContext';

export const BillingAddressFormManager = BillingAddressFormMan;
export const GuestEmailFormManager = GuestEmailMan;
export const ShippingAddressFormManager = ShippingAddressFormMan;
export const StepProvider = FormStepProvider;

export const BillingAddressFormContext = BillingAddressFormCxt;
export const GuestEmailFormContext = GuestEmailFormCxt;
export const ShippingAddressFormContext = ShippingAddressFormCxt;
export const StepContext = FormStepCxt;
