import modifier from './modifier';
import RootElement from '../../../utils/rootElement';
import sendRequest, { RESPONSE_TEXT } from '../../sendRequest';

export default async function restSetMyPaymentMethod(dispatch, paymentData) {
  const { restUrlPrefix } = RootElement.getPaymentConfig();
  const setPaymentMethodUrl = `${restUrlPrefix}carts/mine/payment-information`;

  return modifier(
    await sendRequest(dispatch, paymentData, setPaymentMethodUrl, RESPONSE_TEXT)
  );
}
