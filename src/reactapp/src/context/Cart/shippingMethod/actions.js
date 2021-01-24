import { setShippingMethodRequest } from "../../../api";
import { SET_CART_INFO } from "../cart/types";

export async function setShippingMethodAction(dispatch, shippingMethod) {
  try {
    const cartData = await setShippingMethodRequest(shippingMethod);

    console.log({ cartData })

    dispatch({
      type: SET_CART_INFO,
      payload: cartData,
    });
  } catch (error) {
    /** @todo error message */
  }
}
