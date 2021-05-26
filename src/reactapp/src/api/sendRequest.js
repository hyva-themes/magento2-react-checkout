import { config } from '../config';
import LocalStorage from '../utils/localStorage';

export const RESPONSE_TEXT = 'text';
export const RESPONSE_JSON = 'json';

export default function sendRequest(
  queryParams = {},
  relativeUrl,
  responseType = 'json'
) {
  const token = LocalStorage.getCustomerToken();
  const headers = { 'Content-Type': 'application/json' };
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
