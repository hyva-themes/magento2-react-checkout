import sendRequest, { RESPONSE_JSON } from '../../sendRequest';
import modifier from './modifier';

export default async function ajaxLogin(userCredentials) {
  const relativeUrl = '/customer/ajax/login';
  const additionalHeaders = { 'X-Requested-With': 'XMLHttpRequest' };

  return modifier(
    await sendRequest(
      userCredentials,
      relativeUrl,
      RESPONSE_JSON,
      additionalHeaders
    )
  );
}
