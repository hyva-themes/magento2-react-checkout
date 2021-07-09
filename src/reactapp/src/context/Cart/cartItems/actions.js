import { SET_CART_INFO } from '../cart/types';
import { updateCartItemsRequest } from '../../../api';

export async function updateCartItemAction(dispatch, cartItems) {
  try {
    const cartData = await updateCartItemsRequest(dispatch, cartItems);

    dispatch({
      type: SET_CART_INFO,
      payload: cartData,
    });
  } catch (error) {
    /**
     * @todo message needs to be implemented
     */
  }
}
