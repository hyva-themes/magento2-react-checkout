import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { GET_COUNTRY_LIST_QUERY } from './query';

export default async function fetchCountryList(dispatch) {
  return modifier(
    await sendRequest(dispatch, { query: GET_COUNTRY_LIST_QUERY })
  );
}
