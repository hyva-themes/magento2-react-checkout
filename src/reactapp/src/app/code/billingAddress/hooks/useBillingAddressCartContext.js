import { get as _get } from 'lodash-es';

import { useCartContext } from '../../../../hooks';

export default function useBillingAddressCartContext() {
  const {
    cart,
    addCartBillingAddress,
    setCartBillingAddress,
    setCartSelectedBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useCartContext();

  const isVirtualCart = _get(cart, 'isVirtualCart');
  const cartBillingAddress = _get(cart, `billing_address`);
  const selectedAddressId = _get(cartBillingAddress, 'id');
  const cartShippingAddress = _get(cart, 'shipping_address');

  return {
    isVirtualCart,
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
