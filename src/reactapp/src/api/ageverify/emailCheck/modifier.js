import { get as _get } from 'lodash-es';

export default function fetchCustomerCheckModifier(response) {
  const scoreResult = _get(response, 'data.products.total_count');
  return {
    age_verified_result: scoreResult,
  };
}
