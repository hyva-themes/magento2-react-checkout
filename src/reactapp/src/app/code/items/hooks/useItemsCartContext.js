import { get as _get } from 'lodash-es';

import { _isObjEmpty } from '../../../../utils';
import { useCartContext } from '../../../../hooks';

export default function useItemsCartContext() {
  const { cart, updateCartItem } = useCartContext();
  const cartItems = _get(cart, 'items', {});

  return {
    cartItems,
    updateCartItem,
    cartItemsAvailable: !_isObjEmpty(cartItems),
  };
}
