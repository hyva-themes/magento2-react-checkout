import { get as _get } from 'lodash-es';

import useCartContext from '../../../hook/useCartContext';

export default function useCheckoutFormCartContext() {
  const { order, cart, storeAggregatedCartStates } = useCartContext();
  const orderId = _get(order, 'order_number');
  const isVirtualCart = _get(cart, 'isVirtualCart');

  return {
    orderId,
    isVirtualCart,
    storeAggregatedCartStates,
  };
}
