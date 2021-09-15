export function setOrderInfo(state, order) {
  return {
    ...state,
    order: {
      ...state.order,
      ...order,
    },
  };
}
