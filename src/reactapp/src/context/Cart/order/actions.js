import _get from 'lodash/get';

import { SET_ORDER_INFO } from './types';
import { placeOrderRequest } from '../../../api';
import { PAYMENT_METHOD_FORM } from '../../../config';

export function setOrderInfoAction(dispatch, appDispatch, order) {
  dispatch({
    type: SET_ORDER_INFO,
    payload: order,
  });
}

export async function placeOrderAction(
  dispatch,
  appDispatch,
  values,
  paymentActionList
) {
  try {
    let order;
    const paymentMethod = _get(values, PAYMENT_METHOD_FORM);
    const paymentSubmitAction = _get(paymentActionList, paymentMethod.code);

    if (paymentSubmitAction) {
      order = await paymentSubmitAction(values);
    } else {
      order = await placeOrderRequest(appDispatch);
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
