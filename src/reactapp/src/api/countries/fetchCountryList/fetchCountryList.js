import { GET_COUNTRY_LIST_QUERY } from './query';
import modifier from './modifier';
import sendRequest from '../../sendRequest';

export default async function fetchCountryList() {
  return modifier(await sendRequest({ query: GET_COUNTRY_LIST_QUERY }));
}
