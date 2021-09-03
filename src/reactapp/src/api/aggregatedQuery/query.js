import { CART_QUERY_PART } from '../cart/fetchGuestCart/query';
import { COUNTRY_LIST_QUERY_PART } from '../countries/fetchCountryList/query';
import { COUNTRY_STATE_LIST_QUERY_PART } from '../countries/fetchCountryStateList/query';
import { CUSTOMER_ADDRESS_LIST_QUERY_PART } from '../customer/fetchCustomerAddresses/query';
import { CHECKOUT_AGREEMENTS_QUERY_PART } from '../storeConfig/getCheckoutAgreements/query';

export default function getQuery(token, countryId) {
  return `
    query aggregatedQuery($cartId: String!, $countryId: String) {
      ${CART_QUERY_PART}
      ${COUNTRY_LIST_QUERY_PART}
      ${CHECKOUT_AGREEMENTS_QUERY_PART}
      ${token ? CUSTOMER_ADDRESS_LIST_QUERY_PART : ''}
      ${countryId ? COUNTRY_STATE_LIST_QUERY_PART : ''}
    }
  `;
}
