import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useLoginCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  const {
    mergeCarts,
    createEmptyCart,
    setEmailOnGuestCart,
    getCartInfoAfterMerge,
    getCustomerCartInfo,
    setCustomerDefaultAddressToCart,
    getCustomerCartId,
  } = cartActions;
  const cart = _get(cartData, 'cart');
  const cartEmail = _get(cart, 'email', '');
  const cartId = _get(cart, 'id');

  return {
    cartId,
    cartEmail,

    // actions
    mergeCarts,
    createEmptyCart,
    setEmailOnGuestCart,
    getCustomerCartId,
    getCartInfoAfterMerge,
    getCustomerCartInfo,
    setCustomerDefaultAddressToCart,
  };
}
