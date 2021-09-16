import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';
import { _isObjEmpty } from '../../../utils';

export default function usePaymentMethodCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const cart = _get(cartData, 'cart', {});
  const methodList = _get(cart, 'available_payment_methods', {});
  const selectedPaymentMethod = _get(cart, 'selected_payment_method');
  const { setPaymentMethod } = cartActions;

  return {
    selectedPaymentMethod,
    methodList,
    isPaymentAvailable: !_isObjEmpty(methodList),
    setPaymentMethod,
  };
}
