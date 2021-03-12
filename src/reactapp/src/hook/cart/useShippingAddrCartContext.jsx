import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../context/Cart/CartContext';

export default function useShippingAddrCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');
    const selectedAddressId = _get(cart, 'selected_shipping_address');
    const shippingAddressList = _get(cart, `shipping_addresses`);

    const {
      addCartShippingAddress,
      setCartBillingAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    } = cartActions;

    return {
      cartInfo: cart,
      shippingAddressList,
      selectedAddressId,

      // actions
      addCartShippingAddress,
      setCartBillingAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    };
  }, [cartData, cartActions]);
}
