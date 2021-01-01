export function setCartShippingAddresses(state, shippingAddresses) {
  return {
    ...state,
    cart: {
      shipping_addresses: [...shippingAddresses],
    },
  };
}
