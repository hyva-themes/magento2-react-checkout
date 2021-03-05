import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../context/Cart/CartContext';
import { _keys } from '../../utils';

export default function useShippingAddrCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');
    const shippingAddressList = _get(cart, `shipping_addresses`);
    const shippingAddressIds = _keys(shippingAddressList);

    const {
      addCartShippingAddress,
      setCartBillingAddress,
      setCartSelectedShippingAddress,
    } = cartActions;

    return {
      shippingAddressIds,
      shippingAddressList,

      // actions
      addCartShippingAddress,
      setCartBillingAddress,
      setCartSelectedShippingAddress,
    };
  }, [cartData, cartActions]);
}
