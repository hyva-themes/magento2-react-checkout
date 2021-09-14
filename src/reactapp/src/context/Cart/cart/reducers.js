export function setCartInfo(state, cartInfo) {
  return {
    ...state,
    cart: {
      ...state.cart,
      ...cartInfo,
    },
  };
}
