export function setCartShippingAddresses(state, shippingAddresses) {
  return {
    ...state,
    cart: {
      shipping_addresses: [...shippingAddresses],
    },
  };
}

export function setCartSelectedShippingAddress(state, shippingAddressId) {
  return {
    ...state,
    cart: {
      ...state.cart,
      selected_shipping_address: shippingAddressId,
    },
  };
}
