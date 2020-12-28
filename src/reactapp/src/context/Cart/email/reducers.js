export function setCartEmail(state, email) {
  return {
    ...state,
    cart: {
      ...state.cart,
      email,
    },
  };
}
