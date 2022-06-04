import _get from 'lodash/get';

export default function modifyPlaceOrder(result) {
  return _get(result, 'data.placeOrder.order', {});
}
