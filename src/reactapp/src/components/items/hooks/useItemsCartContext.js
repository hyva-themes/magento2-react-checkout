import { useContext } from 'react';
import _get from 'lodash/get';

import CartContext from '../../../context/Cart/CartContext';
import { _isObjEmpty } from '../../../utils';

export default function useItemsCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const cart = _get(cartData, 'cart');
  const cartItems = _get(cart, 'items', {});
  const { updateCartItem } = cartActions;

  return {
    cartItems,
    updateCartItem,
    cartItemsAvailable: !_isObjEmpty(cartItems),
  };
}
