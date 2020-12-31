import { fetchCountryListRequest } from '../../../api';
import { SET_COUNTRY_LIST } from './type';

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
