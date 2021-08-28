import LocalStorage from '../../utils/localStorage';
import fetchGuestCartModifier from '../cart/fetchGuestCart/modifier';
import fetchCountryListModifier from '../countries/fetchCountryList/modifier';
import fetchCountryStateListModifier from '../countries/fetchCountryStateList/modifier';
import fetchCustomerAddressesModifier from '../customer/fetchCustomerAddresses/modifier';
import getCheckoutAgreementsModifier from '../storeConfig/getCheckoutAgreements/modifier';

export default function aggregatedQueryModifier(result, countryId) {
  const cart = fetchGuestCartModifier(result);
  const token = LocalStorage.getCustomerToken();
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
