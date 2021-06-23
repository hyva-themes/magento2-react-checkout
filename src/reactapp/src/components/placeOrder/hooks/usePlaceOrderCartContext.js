import { useContext } from 'react';
import _get from 'lodash.get';

import CartContext from '../../../context/Cart/CartContext';
import { isCartAddressValid } from '../../../utils/address';

export default function usePlaceOrderCartContext() {
  const [cartData, cartActions] = useContext(CartContext);
  const email = _get(cartData, 'cart.email');
  const billingAddress = _get(cartData, 'cart.billing_address');
  const shippingAddress = _get(cartData, 'cart.shipping_addresses');
  const {
    setShippingMethod,
    setEmailOnGuestCart,
    setCartBillingAddress,
    addCartShippingAddress,
  } = cartActions;

  return {
    email,
    billingAddress,
    shippingAddress,
    setShippingMethod,
    setEmailOnGuestCart,
    setCartBillingAddress,
    addCartShippingAddress,
    hasBillingAddress: !!isCartAddressValid(billingAddress),
    hasShippingAddress: !!isCartAddressValid(shippingAddress),
  };
}
