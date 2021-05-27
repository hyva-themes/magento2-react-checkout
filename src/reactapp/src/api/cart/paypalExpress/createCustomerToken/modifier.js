import _get from 'lodash.get';

export default function createCustomerTokenModifier(result) {
  return _get(result, 'data', {});
}
