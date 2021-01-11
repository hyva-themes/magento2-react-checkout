import { fetchGuestCartRequest } from '../../../api';
import { SET_GUEST_CART_INFO } from './types';

export async function getGuestCartInfoAction(dispatch) {
  try {
    const cartInfo = await fetchGuestCartRequest();

    dispatch({
      type: SET_GUEST_CART_INFO,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo show error message
  }
}
