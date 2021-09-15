import {
  fetchCountryListRequest,
  fetchCountryStateListRequest,
} from '../../../api';
import { ADD_COUNTRY_STATES, SET_COUNTRY_LIST } from './type';

export async function fetchCountriesAction(dispatch) {
  try {
    const countryList = await fetchCountryListRequest(dispatch);

    dispatch({
      type: SET_COUNTRY_LIST,
      payload: countryList,
    });
  } catch (error) {
    // @todo show error message
    console.error(error);
  }
}

export async function fetchCountryStatesAction(dispatch, countryId) {
  try {
    const stateList = await fetchCountryStateListRequest(dispatch, countryId);

    dispatch({
      type: ADD_COUNTRY_STATES,
      payload: { [countryId]: stateList },
    });

    return stateList;
  } catch (error) {
    // @todo show error message
    console.error(error);
    return {};
  }
}
