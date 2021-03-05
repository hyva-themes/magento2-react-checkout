import _get from 'lodash.set';

export default function modifyCreateEmptyCart(result) {
  return _get(result, 'data.createEmptyCart');
}
