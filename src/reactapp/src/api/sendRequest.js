import { config } from '../config';
import LocalStorage from '../utils/localStorage';
import RootElement from '../utils/rootElement';

export const RESPONSE_TEXT = 'text';
export const RESPONSE_JSON = 'json';

const storeCode = RootElement.getStoreCode();

export default function sendRequest(
  queryParams = {},
  relativeUrl,
  responseType = 'json',
  additionalHeaders = {}
) {
  const headers = {
    'Content-Type': 'application/json',
    Store: storeCode,
    ...additionalHeaders,
  };
  const token = LocalStorage.getCustomerToken();
  const url = `${config.baseUrl}${relativeUrl || '/graphql'}`;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...queryParams }),
  })
    .then(response => {
      if (response.ok && responseType === RESPONSE_TEXT) {
        return response.text();
      }
      return response.json();
    })
    .catch(exception => {
      console.error(exception);
      throw exception;
    });
}
