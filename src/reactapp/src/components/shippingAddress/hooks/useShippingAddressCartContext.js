import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useShippingAddressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');
    const cartBillingAddress = _get(cart, 'billing_address');
    const cartShippingAddress = _get(cart, `shipping_address`);
    const selectedAddressId = _get(cart, 'selected_shipping_address');

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
      addCartShippingAddress,
      setCartSelectedShippingAddress,
      setCustomerAddressAsBillingAddress,
      setCustomerAddressAsShippingAddress,
    };
  }, [cartData, cartActions]);
}
