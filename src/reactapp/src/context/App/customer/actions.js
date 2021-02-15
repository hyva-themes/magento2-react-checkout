import _get from 'lodash.get';

import {
  fetchCustomerAddressListRequest,
  fetchCustomerInfoRequest,
  generateCustomerToken,
} from '../../../api';
import LS from '../../../utils/LS';
import {
  setErrroMessageAction,
  setSuccessMessageAction,
} from '../page/actions';
import { SET_CUSTOMER_ADDRESS_INFO, SET_CUSTOMER_INFO } from './types';

export async function sigInCustomerAction(dispatch, userCredentials) {
  try {
    const { token } = await generateCustomerToken(userCredentials);
    LS.saveCustomerToken(token);
    setSuccessMessageAction(dispatch, 'You are successfully logged-in');

    return true;
  } catch (error) {
    console.log('sigInCustomerAction', { error });
    setErrroMessageAction(
      dispatch,
      _get(error, 'message') ||
        'Something went wrong with sign-in. Please try later'
    );
  }

  return false;
}

export async function getCustomerInfoAction(dispatch) {
  try {
    const customerInfo = await fetchCustomerInfoRequest();

    dispatch({
      type: SET_CUSTOMER_INFO,
      payload: customerInfo,
    });
  } catch (error) {
    console.log('getCustomerInfoAction', { error });
  }
}

export async function getCustomerAddressListAction(dispatch) {
  try {
    const customerAddressInfo = await fetchCustomerAddressListRequest();

    dispatch({
      type: SET_CUSTOMER_ADDRESS_INFO,
      payload: customerAddressInfo,
    });
  } catch (error) {
    console.log('getCustomerAddressListAction', { error });
  }
}
