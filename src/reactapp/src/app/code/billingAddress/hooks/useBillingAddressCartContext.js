import _get from 'lodash.get';

import { useCartContext } from '../../../../hooks';

export default function useBillingAddressCartContext() {
  const {
    cart,
    addCartBillingAddress,
    setCartBillingAddress,
    setCartSelectedBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useCartContext;

  const cartBillingAddress = _get(cart, `billing_address`);
  const cartShippingAddress = _get(cart, 'shipping_address');
  const selectedAddressId = _get(cartBillingAddress, 'id');

  return {
    cartInfo: cart,
    selectedAddressId,
    cartBillingAddress,
    cartShippingAddress,

    // actions
    addCartBillingAddress,
    setCartBillingAddress,
    setCartSelectedBillingAddress,
    setCustomerAddressAsBillingAddress,
  };
}
