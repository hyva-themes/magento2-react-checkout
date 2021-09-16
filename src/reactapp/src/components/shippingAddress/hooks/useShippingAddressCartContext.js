import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useShippingAddressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart', {}) || {};
    const {
      defaultBillingAddress,
      defaultShippingAddress,
      billing_address: cartBillingAddress,
      shipping_address: cartShippingAddress,
      selected_shipping_address: selectedAddressId,
    } = cart;
    const {
      setCartBillingAddress,
      updateCustomerAddress,
      addCartShippingAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    } = cartActions;

    return {
      cartInfo: cart,
      selectedAddressId,
      cartBillingAddress,
      cartShippingAddress,
      setCartBillingAddress,
      updateCustomerAddress,
      defaultBillingAddress,
      addCartShippingAddress,
      defaultShippingAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    };
  }, [cartData, cartActions]);
}
