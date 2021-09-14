import { SET_CART_EMAIL } from './types';
import { setEmailOnGuestCartRequest } from '../../../api';

export async function setEmailOnGuestCartAction(dispatch, appDispatch, email) {
  try {
    await setEmailOnGuestCartRequest(appDispatch, email);

    dispatch({
      type: SET_CART_EMAIL,
      payload: { email },
    });
  } catch (error) {
    // @todo show error message;
  }
}
