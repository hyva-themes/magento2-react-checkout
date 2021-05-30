import {
  createPaypalExpressCustomerTokenRequest,
  setPaypalExpressPaymentMethodRequest,
} from '../../../api';

export async function createPaypalExpressCustomerTokenAction(createTokenInputs) {
  try {
    const result =  await createPaypalExpressCustomerTokenRequest(
      createTokenInputs
    );

    return result;
  } catch (error) {
    console.error(error);
  }

  return {};
}

export async function setPaypalExpressPaymentMethodAction(paymentMethodData) {
  try {
    const result  = await setPaypalExpressPaymentMethodRequest(
      paymentMethodData
    );

    return result;
  } catch (error) {
    console.error(error);
  }

  return {};
}
