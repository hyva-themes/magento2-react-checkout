import { get as _get } from 'lodash-es';

export function isError(response) {
  return !!_get(response, 'error', false);
}
