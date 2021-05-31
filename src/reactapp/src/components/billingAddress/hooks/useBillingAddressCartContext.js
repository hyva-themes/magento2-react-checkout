import { useContext, useMemo } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';

export default function useBillingAddressCartContext() {
  const [cartData, cartActions] = useContext(CartContext);

  return useMemo(() => {
    const cart = _get(cartData, 'cart');
    const cartBillingAddress = _get(cart, `billing_address`);
    const selectedAddressId = _get(cartBillingAddress, 'id');

    const {
      addCartBillingAddress,
      setCartBillingAddress,
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
      setCartSelectedBillingAddress,
      setCustomerAddressAsBillingAddress,
    };
  }, [cartData, cartActions]);
}
