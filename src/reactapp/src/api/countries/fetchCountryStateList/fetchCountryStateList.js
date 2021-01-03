import sendRequest from '../../sendRequest';
import { GET_COUNTRY_STATE_LIST_QUERY } from './query';
import modifier from './modifier';

export default async function fetchCountryStateList(countryId) {
  const variables = { countryId };

  return modifier(
    await sendRequest({ query: GET_COUNTRY_STATE_LIST_QUERY, variables })
  );
}
