import _get from 'lodash/get';

export function isError(response) {
  return !!_get(response, 'error', false);
}
