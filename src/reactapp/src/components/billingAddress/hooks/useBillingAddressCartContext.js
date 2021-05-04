import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useBillingAddressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');
    const selectedAddressId = _get(cart, 'selected_shipping_address');
    const cartBillingAddress = _get(cart, `shipping_addresses`);

    const {
      addCartBillingAddress,
      setCartBillingAddress,
      updateCustomerAddress,
      setCartSelectedBillingAddress,
      setCustomerAddressAsBillingAddress,
    } = cartActions;

    return {
      cartInfo: cart,
      cartBillingAddress,
      selectedAddressId,

      // actions
      addCartBillingAddress,
      setCartBillingAddress,
      updateCustomerAddress,
      setCartSelectedBillingAddress,
      setCustomerAddressAsBillingAddress,
    };
  }, [cartData, cartActions]);
}
