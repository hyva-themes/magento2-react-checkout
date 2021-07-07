import { SET_CART_EMAIL } from './types';
import { setEmailOnGuestCartRequest } from '../../../api';

export async function setEmailOnGuestCartAction(dispatch, email) {
  try {
    await setEmailOnGuestCartRequest(dispatch, email);

    dispatch({
      type: SET_CART_EMAIL,
      payload: { email },
    });
  } catch (error) {
    // @todo show error message;
  }
}
