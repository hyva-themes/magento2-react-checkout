import _get from 'lodash/get';
import { prepareFullName } from '../../../utils/customer';

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
