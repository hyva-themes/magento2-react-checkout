import {
  responseDataEmpty,
  responseContainErrors,
  GraphQLResponseException,
} from './utility';
import env from '../utils/env';
import RootElement from '../utils/rootElement';
import LocalStorage from '../utils/localStorage';
import { SET_PAGE_MESSAGE } from '../context/App/page/types';

export const RESPONSE_TEXT = 'text';
export const RESPONSE_JSON = 'json';

const storeCode = env.storeCode || RootElement.getStoreCode();

export default function sendRequest(
  dispatch,
  queryParams,
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
  const url = `/backend/${relativeUrl || 'graphql'}`;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify({ ...(queryParams || {}) }),
  })
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
