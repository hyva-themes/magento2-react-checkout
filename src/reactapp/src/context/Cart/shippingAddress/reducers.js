export function setCartShippingAddress(state, shippingAddress) {
  return {
    ...state,
    cart: {
      shipping_address: [...shippingAddress],
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
