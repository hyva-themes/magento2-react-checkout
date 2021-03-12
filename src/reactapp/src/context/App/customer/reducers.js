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

export function updateCustomerAddressReducer(state, customerAddr) {
  return {
    ...state,
    customerAddressList: {
      ...state.customerAddressList,
      ...customerAddr,
    },
  };
}
