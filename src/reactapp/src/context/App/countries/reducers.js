export function setCountryList(state, countryList) {
  return {
    ...state,
    countryList: [...state.countryList, ...countryList],
  };
}

export function addCountryStateList(state, countryStateList) {
  return {
    ...state,
    stateList: { ...state.stateList, ...countryStateList },
  };
}
