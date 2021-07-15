import modifier from './modifier';
import sendRequest, { RESPONSE_JSON } from '../../sendRequest';

export default async function ajaxLogin(dispatch, userCredentials) {
  const relativeUrl = '/customer/ajax/login';
  const additionalHeaders = { 'X-Requested-With': 'XMLHttpRequest' };

  const result = await sendRequest(
    dispatch,
    userCredentials,
    relativeUrl,
    RESPONSE_JSON,
    additionalHeaders
  );

  return modifier(result);
}
