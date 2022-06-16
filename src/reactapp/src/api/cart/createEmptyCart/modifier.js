import { get as _get } from 'lodash-es';

export default function modifyCreateEmptyCart(result) {
  return _get(result, 'data.createEmptyCart.id');
}
