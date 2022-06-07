import { get as _get } from 'lodash-es';

export default function modifyCustomerCart(result) {
  return _get(result, 'data.customerCart.id');
}
