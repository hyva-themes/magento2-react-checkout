import { get as _get } from 'lodash-es';

export default function modifyPlaceOrder(result) {
  return _get(result, 'data.placeOrder.order', {});
}
