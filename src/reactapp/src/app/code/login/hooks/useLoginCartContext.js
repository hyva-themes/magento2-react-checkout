import _get from 'lodash.get';

import { useCartContext } from '../../../../hooks';

export default function useLoginCartContext() {
  const {
    cart,
    mergeCarts,
    createEmptyCart,
    getCustomerCartId,
    setEmailOnGuestCart,
    getCustomerCartInfo,
    getCartInfoAfterMerge,
  } = useCartContext();

  const cartId = _get(cart, 'id');
  const cartEmail = _get(cart, 'email', '');

  return {
    cartId,
    cartEmail,

    // actions
    mergeCarts,
    createEmptyCart,
    getCustomerCartId,
    setEmailOnGuestCart,
    getCustomerCartInfo,
    getCartInfoAfterMerge,
  };
}
