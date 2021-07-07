import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { GET_COUNTRY_STATE_LIST_QUERY } from './query';

export default async function fetchCountryStateList(dispatch, countryId) {
  const variables = { countryId };

  return modifier(
    await sendRequest(dispatch, {
      query: GET_COUNTRY_STATE_LIST_QUERY,
      variables,
    })
  );
}
