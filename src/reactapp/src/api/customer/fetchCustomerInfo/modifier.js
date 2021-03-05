import _get from 'lodash.get';
import { prepareFullName } from '../utility';

export default function modifyCustomerAddressList(response) {
  const customerData = _get(response, 'data.customer', {});

  return {
    isLoggedIn: !!_get(customerData, 'email'),
    customer: {
      ...customerData,
      fullName: prepareFullName(customerData),
    },
  };
}
