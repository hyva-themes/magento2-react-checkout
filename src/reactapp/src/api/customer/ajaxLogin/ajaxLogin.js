import modifier from './modifier';
import sendRequest, { RESPONSE_JSON } from '../../sendRequest';
import { config } from '../../../config';

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

  if (config.isProductionMode && typeof window !== 'undefined') {
    // window.dispatchEvent(new Event('reload-customer-section-data'));
    window.location.reload();
  }

  return modifier(result);
}
