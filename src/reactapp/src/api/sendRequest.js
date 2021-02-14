import { config } from '../config';
import LS from '../utils/LS';

export default function sendRequest(queryParams = {}) {
  const token = LS.getCustomerToken();
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return fetch(`${config.baseUrl}/graphql`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...queryParams }),
  })
    .then(response => response.json())
    .catch(exception => {
      console.error(exception);
      throw exception;
    });
}
