import { SET_CART_INFO } from '../cart/types';
import { updateCartItemsRequest } from '../../../api';

export async function updateCartItemAction(dispatch, appDispatch, cartItems) {
  const cartData = await updateCartItemsRequest(appDispatch, cartItems);

  dispatch({
    type: SET_CART_INFO,
    payload: cartData,
  });
}
