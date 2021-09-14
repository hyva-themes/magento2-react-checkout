export function setPageLoader(state, pageLoader) {
  return {
    ...state,
    pageLoader,
  };
}

export function setPageMessage(state, message) {
  return {
    ...state,
    message,
  };
}
