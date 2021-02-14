import _get from 'lodash.get';

export default function modifyCustomerCart(result) {
  return _get(result, 'data.customerCart.id');
}
