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

export default function sendRequest(
  dispatch,
  // eslint-disable-next-line default-param-last
  queryParams = {},
  relativeUrl,
  responseType = 'json',
  additionalHeaders = {},
  isGetRequest = false
) {
  const headers = {
    'Content-Type': 'application/json',
    Store: storeCode,
    ...additionalHeaders,
  };
  const method = isGetRequest ? 'GET' : 'POST';
  const token = LocalStorage.getCustomerToken();
  const url = `${config.baseUrl}${relativeUrl || '/graphql'}`;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const fetchOptions = { headers, method };

  if (!isGetRequest) {
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
      if (responseContainErrors(response)) {
        const exception = new GraphQLResponseException(response);
        dispatch({
          type: SET_PAGE_MESSAGE,
          payload: { type: 'error', message: exception.message },
        });
        if (responseDataEmpty(response)) {
          throw exception;
        }
      }
      return response;
    })
    .catch((exception) => {
      console.error(exception);
      throw exception;
    });
}
