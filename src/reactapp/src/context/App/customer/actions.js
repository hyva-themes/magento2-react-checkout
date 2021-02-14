import _get from 'lodash.get';

import { generateCustomerToken } from '../../../api';
import LS from '../../../utils/LS';
import {
  setErrroMessageAction,
  setSuccessMessageAction,
} from '../page/actions';

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
