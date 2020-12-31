import { setEmailOnGuestCartRequest } from '../../../api/cart';
import { SET_CART_EMAIL } from './types';

export async function setEmailOnGuestCartAction(dispatch, email) {
  try {
    await setEmailOnGuestCartRequest(email);

    dispatch({
      type: SET_CART_EMAIL,
      payload: { email },
    });
  } catch (error) {
    // @todo show error message;
  }
}
