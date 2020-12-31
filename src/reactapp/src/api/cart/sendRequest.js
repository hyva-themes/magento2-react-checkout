import { config } from '../../config';

export default function sendRequest(queryParams = {}) {
  return fetch(`${config.baseUrl}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...queryParams }),
  })
    .then(response => response.json())
    .catch(exception => {
      console.error(exception);
      throw exception;
    });
}
