import { useContext, useMemo } from 'react';
import { get as _get } from 'lodash-es';

import CartContext from '../../../context/Cart/CartContext';

export default function useShippingAddressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart', {}) || {};
    const {
      isVirtualCart,
      defaultBillingAddress,
      defaultShippingAddress,
      billing_address: cartBillingAddress,
      shipping_address: cartShippingAddress,
      selected_shipping_address: selectedAddressId,
    } = cart;
    const {
      setShippingMethod,
      setCartBillingAddress,
      updateCustomerAddress,
      addCartShippingAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    } = cartActions;

    return {
      isVirtualCart,
      cartInfo: cart,
      setShippingMethod,
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
