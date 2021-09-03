import fetchGuestCartModifier from '../cart/fetchGuestCart/modifier';
import fetchCountryListModifier from '../countries/fetchCountryList/modifier';
import fetchCountryStateListModifier from '../countries/fetchCountryStateList/modifier';
import fetchCustomerAddressesModifier from '../customer/fetchCustomerAddresses/modifier';
import getCheckoutAgreementsModifier from '../storeConfig/getCheckoutAgreements/modifier';

export default function aggregatedQueryModifier(result, token, countryId) {
  const cart = fetchGuestCartModifier(result);
  const countryList = fetchCountryListModifier(result);
  const checkoutAgreements = getCheckoutAgreementsModifier(result);
  const customer = (token && fetchCustomerAddressesModifier(result)) || {};
  const stateList =
    (countryId && { [countryId]: fetchCountryStateListModifier(result) }) || {};

  return {
    cart,
    customer,
    stateList,
    countryList,
    checkoutAgreements,
  };
}
