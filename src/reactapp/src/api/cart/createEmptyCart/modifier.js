import _get from 'lodash/get';

export default function modifyCreateEmptyCart(result) {
  return _get(result, 'data.createEmptyCart.id');
}
