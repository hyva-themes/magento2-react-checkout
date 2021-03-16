import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../context/Cart/CartContext';

export default function useBillingAddrCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const { setCartBillingAddress } = cartActions;

  const cart = _get(cartData, 'cart');

  const cartBillingAddress = _get(cart, `billing_address`);

  return { cartBillingAddress, setCartBillingAddress };
}
