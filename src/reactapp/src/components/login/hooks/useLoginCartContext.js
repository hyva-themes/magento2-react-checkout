import { useContext } from 'react';
import { get as _get } from 'lodash-es';

import CartContext from '../../../context/Cart/CartContext';

export default function useLoginCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  const {
    mergeCarts,
    createEmptyCart,
    setEmailOnGuestCart,
    emailCheck,
    getCartInfoAfterMerge,
    getCustomerCartInfo,
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
    emailCheck,
    getCustomerCartId,
    getCartInfoAfterMerge,
    getCustomerCartInfo,
  };
}
