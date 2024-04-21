import {
  responseDataEmpty,
  responseContainErrors,
  GraphQLResponseException,
} from './utility';
import env from '../utils/env';
import { config } from '../config';
import RootElement from '../utils/rootElement';
import LocalStorage from '../utils/localStorage';
import { SET_PAGE_MESSAGE } from '../context/App/page/types';

export const RESPONSE_TEXT = 'text';
export const RESPONSE_JSON = 'json';

const storeCode = env.storeCode || RootElement.getStoreCode();

/**
 *
 * @param dispatch - App dispatch function
 * @param {object} queryParams - Data to add in the fetch body.
 * @param {string} relativeUrl
 *    - If this is specified, then this will be used instead of "graphql" which is the default.
 * @param {string} responseType - You can specify here "text" or "json". Default to "json".
 * @param {object} additionalHeaders - Additional request headers can be added here.
 * @param {boolean|string} requestType - Use to specify the fetch method type.
 *    TRUE - default value - POST
 *    FALSE  - GET
 *    PUT - PUT
 *    DELETE - DELETE
 */
export default function sendRequest(
  dispatch,
  // eslint-disable-next-line default-param-last
  queryParams = {},
  relativeUrl,
  responseType = 'json',
  additionalHeaders = {},
  requestType = false
) {
  const headers = {
    'Content-Type': 'application/json',
    Store: storeCode,
    ...additionalHeaders,
  };
  let method = requestType ? 'GET' : 'POST';

  if (![true, false].includes(requestType)) {
    method = requestType;
  }

  const token = LocalStorage.getCustomerToken();
  const url = `${config.baseUrl}${relativeUrl || '/graphql'}`;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const fetchOptions = { headers, method };

  if (method !== 'GET') {
    fetchOptions.body = JSON.stringify({ ...queryParams });
  }

  return fetch(url, fetchOptions)
    .then((response) => {
      if (response.ok && responseType === RESPONSE_TEXT) {
        return response.text();
      }
      return response.json();
    })
    .then((response) => {
      if (!responseContainErrors(response) || !responseDataEmpty(response)) {
        return response;
      }

      const exception = new GraphQLResponseException(response);

      dispatch({
        type: SET_PAGE_MESSAGE,
        payload: { type: 'error', message: exception.message },
      });
      throw exception;
    })
    .catch((exception) => {
      console.error(exception);
      throw exception;
    });
}
