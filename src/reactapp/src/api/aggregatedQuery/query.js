import { CART_QUERY_PART } from '../cart/fetchGuestCart/query';
import { COUNTRY_LIST_QUERY_PART } from '../countries/fetchCountryList/query';
import { STORE_CONFIG_QUERY_PART } from '../storeConfig/configurations/query';
import { CUSTOMER_ADDRESS_LIST_QUERY_PART } from '../customer/fetchCustomerAddresses/query';
import { CHECKOUT_AGREEMENTS_QUERY_PART } from '../storeConfig/getCheckoutAgreements/query';

export default function getQuery(token) {
  return `
    query aggregatedQuery($cartId: String!) {
      ${CART_QUERY_PART}
      ${COUNTRY_LIST_QUERY_PART}
      ${STORE_CONFIG_QUERY_PART}
      ${CHECKOUT_AGREEMENTS_QUERY_PART}
      ${token ? CUSTOMER_ADDRESS_LIST_QUERY_PART : ''}
    }
  `;
}
