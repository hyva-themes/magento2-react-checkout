export function setCustomerAddressInfo(state, customerAddrInfo) {
  return {
    ...state,
    ...customerAddrInfo,
  };
}

export function setCustomerInfo(state, customerInfo) {
  return {
    ...state,
    ...customerInfo,
  };
}
