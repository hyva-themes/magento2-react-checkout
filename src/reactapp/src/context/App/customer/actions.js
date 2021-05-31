import _get from 'lodash.get';

import {
  ajaxLoginRequest,
  fetchCustomerAddressListRequest,
  fetchCustomerInfoRequest,
  generateCustomerToken,
  updateCustomerAddressRequest,
} from '../../../api';
import { _cleanObjByKeys } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import {
  setErrroMessageAction,
  setSuccessMessageAction,
} from '../page/actions';
import {
  SET_CUSTOMER_ADDRESS_INFO,
  SET_CUSTOMER_INFO,
  UPDATE_CUSTOMER_ADDRESS,
  UPDATE_CUSTOMER_LOGGEDIN_STATUS,
} from './types';

export function setLoggedInStatusAction(dispatch, status) {
  dispatch({
    type: UPDATE_CUSTOMER_LOGGEDIN_STATUS,
    payload: status,
  });
}

export async function sigInCustomerAction(dispatch, userCredentials) {
  try {
    const { token } = await generateCustomerToken(userCredentials);
    LocalStorage.saveCustomerToken(token);
    setLoggedInStatusAction(dispatch, true);
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

export async function ajaxLoginAction(dispatch, userCredentials) {
  try {
    const response = await ajaxLoginRequest(userCredentials);
    const { errors, data } = response;

    if (!errors) {
      const signInToken = _get(data, 'customer.signin_token');
      const cartId = _get(data, 'cart.cartId');
      LocalStorage.saveCartId(cartId);
      LocalStorage.saveCustomerToken(signInToken);
    }

    return response;
  } catch (error) {
    console.error(error);
  }

  return {};
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

    return customerAddressInfo;
  } catch (error) {
    console.log('getCustomerAddressListAction', { error });
  }

  return {};
}

export async function updateCustomerAddressAction(
  dispatch,
  addressId,
  customerAddress,
  stateInfo
) {
  try {
    const address = { ...customerAddress };
    const { country, phone, region, zipcode } = customerAddress;

    if (country) {
      address.country_code = country;
    }
    if (phone) {
      address.telephone = phone;
    }
    if (region) {
      address.region = {
        region_code: region,
        region_id: _get(stateInfo, 'id'),
        region: _get(stateInfo, 'code'),
      };
    }
    if (zipcode) {
      address.postcode = zipcode;
    }
    const keysToRemove = [
      'country',
      'id',
      'isSameAsShipping',
      'phone',
      'selectedAddress',
      'zipcode',
      'fullName',
    ];

    const customerAddressInfo = await updateCustomerAddressRequest(
      addressId,
      _cleanObjByKeys(address, keysToRemove)
    );

    dispatch({
      type: UPDATE_CUSTOMER_ADDRESS,
      payload: customerAddressInfo,
    });
  } catch (error) {
    console.log('updateCustomerAddressAction', { error });
  }
}
