// import { func } from "prop-types";

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

export function setCustomerLoggedInStatusReducer(state, status) {
  return {
    ...state,
    isLoggedIn: status,
  };
}

export function emailCheckReducer(state, data) {
  return {
    ...state,
    emailCheck: data,
  };
}
