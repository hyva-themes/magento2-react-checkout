import _get from 'lodash.get';

import useCartContext from '../../../hook/useCartContext';

export default function useCheckoutFormCartContext() {
  const { order, storeAggregatedCartStates } = useCartContext();
  const orderId = _get(order, 'order_number');

  return {
    orderId,
    storeAggregatedCartStates,
  };
}
