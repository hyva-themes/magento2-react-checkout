import _get from 'lodash.get';

import { placeOrderRequest } from '../../../api';
import { PAYMENT_METHOD_FORM } from '../../../config';
import { SET_ORDER_INFO } from './types';

export function setOrderInfoAction(dispatch, order) {
  dispatch({
    type: SET_ORDER_INFO,
    payload: order,
  });
}

export async function placeOrderAction(dispatch, values, paymentActionList) {
  try {
    let order;
    const paymentMethod = _get(values, PAYMENT_METHOD_FORM);
    const paymentSubmitAction = _get(paymentActionList, paymentMethod.code);

    if (paymentSubmitAction) {
      order = await paymentSubmitAction(values);
    } else {
      order = await placeOrderRequest();
    }

    if (order) {
      dispatch({
        type: SET_ORDER_INFO,
        payload: order,
      });
    }

    return order;
  } catch (error) {
    /**
     * error message needs to be implemented
     */
    console.error(error);
  }

  return {};
}
