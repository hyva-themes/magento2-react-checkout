export function setCountryList(state, countryList) {
  return {
    ...state,
    countryList: [...state.countryList, ...countryList],
  };
}
