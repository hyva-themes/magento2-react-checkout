import { updateCartItemsRequest } from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function updateCartItemAction(dispatch, cartItems) {
  try {
    const cartData = await updateCartItemsRequest(cartItems);

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
