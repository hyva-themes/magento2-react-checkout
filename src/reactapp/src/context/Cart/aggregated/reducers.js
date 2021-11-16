export function setAggregatedData(state, data) {
  const { cart, ...otherData } = data;
  return {
    ...state,
    ...otherData,
    cart: {
      ...state.cart,
      ...cart,
    },
  };
}
