import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useTotalsCartContext() {
  const [cartData] = useContext(CartContext);
  const cart = _get(cartData, 'cart');
  const shippingMethod = _get(cart, 'selected_shipping_method');
  const shippingMethodRate = _get(shippingMethod, 'price');
  const subTotal = _get(cart, 'prices.subTotal');
  const grandTotal = _get(cart, 'prices.grandTotal');

  return { shippingMethodRate, subTotal, grandTotal };
}
