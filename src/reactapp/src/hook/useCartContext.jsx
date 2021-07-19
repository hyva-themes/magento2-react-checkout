import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../context/Cart/CartContext';

export default function useCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const { getGuestCartInfo, placeOrder } = cartActions;
  const cart = _get(cartData, 'cart');
  const orderId = _get(cartData, 'order.order_number');
  const selectedPaymentMethod = _get(cart, 'selected_payment_method');
  const selectedShippingMethod = _get(cart, 'selected_shipping_method');

  return {
    orderId,
    placeOrder,
    getGuestCartInfo,
    selectedPaymentMethod,
    selectedShippingMethod,
  };
}
