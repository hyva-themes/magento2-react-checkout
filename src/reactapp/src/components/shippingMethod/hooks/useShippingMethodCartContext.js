import { useContext } from 'react';
import { get as _get } from 'lodash-es';

import CartContext from '../../../context/Cart/CartContext';
import { _isObjEmpty } from '../../../utils';

export default function useShippingMethodCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const { setShippingMethod } = cartActions;
  const {
    selected_shipping_method: selectedMethod = {},
    shipping_methods: methodList,
  } = _get(cartData, 'cart', {});

  return {
    selectedMethod,
    methodList,
    methodsAvailable: !_isObjEmpty(methodList),
    setShippingMethod,
  };
}
