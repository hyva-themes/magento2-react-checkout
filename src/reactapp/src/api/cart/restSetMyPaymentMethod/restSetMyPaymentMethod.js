import modifier from './modifier';
import sendRequest, { RESPONSE_TEXT } from '../../sendRequest';
import RootElement from '../../../utils/rootElement';

export default async function restSetMyPaymentMethod(paymentData) {
  const { restUrlPrefix } = RootElement.getPaymentConfig();
  const setPaymentMethodUrl = `${restUrlPrefix}carts/mine/payment-information`;

  return modifier(
    await sendRequest(paymentData, setPaymentMethodUrl, RESPONSE_TEXT)
  );
}
