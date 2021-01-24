import _get from 'lodash.get';
import { placeOrderRequest } from '../../../api';
import { PAYMENT_METHOD_FORM, SHIPPING_METHOD } from '../../../config';
import { setPaymentMethodAction } from '../paymentMethod/actions';
import { setShippingMethodAction } from '../shippingMethod/actions';
import { SET_ORDER_INFO } from './types';

async function verifyShippingMethod(dispatch, values, shippingMethod) {
  if (!shippingMethod.carrierCode || shippingMethod.methodCode) {
    const shippingMethodSelected = _get(values, SHIPPING_METHOD);

    if (
      !shippingMethodSelected.carrierCode ||
      !shippingMethodSelected.methodCode
    ) {
      throw new Error('Shipping method not available');
    }

    await setShippingMethodAction(dispatch, shippingMethodSelected);
  }
}

async function verifyPaymentMethod(dispatch, values, selectedPaymentMethod) {
  if (!selectedPaymentMethod.code) {
    const paymentMethod = _get(values, PAYMENT_METHOD_FORM);

    if (!paymentMethod.code) {
      throw new Error('Pyament method not available');
    }

    await setPaymentMethodAction(dispatch, paymentMethod);
  }
}

export async function placeOrderAction(
  dispatch,
  values,
  { shippingMethod, selectedPaymentMethod }
) {
  try {
    await verifyShippingMethod(dispatch, values, shippingMethod);

    await verifyPaymentMethod(dispatch, values, selectedPaymentMethod);

    const order = await placeOrderRequest();

    dispatch({
      type: SET_ORDER_INFO,
      payload: order,
    });
  } catch (error) {
    /**
     * error message needs to be implemented
     */
  }
}
