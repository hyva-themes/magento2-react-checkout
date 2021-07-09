import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useShippingAddressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');
    const selectedAddressId = _get(cart, 'selected_shipping_address');
    const cartShippingAddress = _get(cart, `shipping_address`);

    const {
      addCartShippingAddress,
      setCartBillingAddress,
      updateCustomerAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    } = cartActions;

    return {
      cartInfo: cart,
      cartShippingAddress,
      selectedAddressId,

      // actions
      addCartShippingAddress,
      setCartBillingAddress,
      updateCustomerAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    };
  }, [cartData, cartActions]);
}
