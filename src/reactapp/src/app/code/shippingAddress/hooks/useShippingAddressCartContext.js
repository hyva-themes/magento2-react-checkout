import { useCartContext } from '../../../../hooks';

export default function useShippingAddressCartContext() {
  const {
    cart,
    setCartBillingAddress,
    updateCustomerAddress,
    addCartShippingAddress,
    setCartSelectedShippingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress,
  } = useCartContext();

  const {
    defaultBillingAddress,
    defaultShippingAddress,
    billing_address: cartBillingAddress,
    shipping_address: cartShippingAddress,
    selected_shipping_address: selectedAddressId,
  } = cart || {};

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
}
