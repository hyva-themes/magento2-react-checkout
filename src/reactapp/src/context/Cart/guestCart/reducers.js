export function setGuestCartInfo(state, cartInfo) {
  return {
    ...state,
    cart: {
      ...state.cart,
      ...cartInfo,
    },
  };
}
