import { get as _get } from 'lodash-es';

import { _isArrayEmpty, _keys } from '../../utils';

export function GraphQLResponseException(response) {
  const errors = _get(response, 'errors') || [];

  if (errors === true) {
    this.message = _get(response, 'message') || '';
  } else {
    this.message = errors.map((error) => error.message).join('; ');
  }
}

export function responseContainErrors(response) {
  const errors = _get(response, 'errors', []);

  return !_isArrayEmpty(errors);
}

export function responseDataEmpty(response) {
  const data = _get(response, 'data');
  const responseDataName = _get(_keys(data), '0');
  const responseData = _get(data, responseDataName);

  return !responseData;
}
