import { fetchCountryListRequest } from '../../../api';
import fetchCountryStateList from '../../../api/countries/fetchCountryStateList';
import { ADD_COUNTRY_STATES, SET_COUNTRY_LIST } from './type';

export async function fetchCountriesAction(dispatch) {
  try {
    const countryList = await fetchCountryListRequest();

    dispatch({
      type: SET_COUNTRY_LIST,
      payload: countryList,
    });
  } catch (error) {
    // @todo show error message
  }
}

export async function fetchCountryStatesAction(dispatch, countryId) {
  try {
    const stateList = await fetchCountryStateList(countryId);

    dispatch({
      type: ADD_COUNTRY_STATES,
      payload: { [countryId]: stateList },
    });
  } catch (error) {
    // @todo show error message
  }
}
