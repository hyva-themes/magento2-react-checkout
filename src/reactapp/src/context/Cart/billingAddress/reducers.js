export function setCartBillingAddress(state, billingAddress) {
  return {
    ...state,
    cart: {
      ...state.cart,
      billing_address: {
        ...state.cart.billingAddress,
        ...billingAddress,
      },
    },
  };
}
