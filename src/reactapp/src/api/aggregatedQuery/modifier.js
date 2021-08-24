import LocalStorage from '../../utils/localStorage';
import fetchGuestCartModifier from '../cart/fetchGuestCart/modifier';
import fetchCountryListModifier from '../countries/fetchCountryList/modifier';
import storeConfigurationsModifier from '../storeConfig/configurations/modifier';
import fetchCustomerAddressesModifier from '../customer/fetchCustomerAddresses/modifier';
import getCheckoutAgreementsModifier from '../storeConfig/getCheckoutAgreements/modifier';

export default function aggregatedQueryModifier(result) {
  const cart = fetchGuestCartModifier(result);
  const token = LocalStorage.getCustomerToken();
  const countryList = fetchCountryListModifier(result);
  const storeConfig = storeConfigurationsModifier(result);
  const checkoutAgreements = getCheckoutAgreementsModifier(result);
  const customer = token && fetchCustomerAddressesModifier(result);

  return {
    cart,
    customer,
    countryList,
    storeConfig,
    checkoutAgreements,
  };
}
