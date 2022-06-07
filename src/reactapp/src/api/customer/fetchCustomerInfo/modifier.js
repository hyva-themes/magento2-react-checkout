import { get as _get } from 'lodash-es';
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
