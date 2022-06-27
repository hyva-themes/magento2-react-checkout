import { get as _get } from 'lodash-es';

export default function generateTokenModifier(result) {
  const error = _get(result, 'errors[0].message');
  const token = _get(result, 'data.generateCustomerToken.token');

  return {
    error,
    token,
  };
}
