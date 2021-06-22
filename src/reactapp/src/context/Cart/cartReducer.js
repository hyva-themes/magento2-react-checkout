import { setCartBillingAddress } from './billingAddress/reducers';
import { SET_CART_BILLING_ADDRESS } from './billingAddress/types';
import { setCartInfo } from './cart/reducers';
import { SET_CART_INFO } from './cart/types';
import { setCartEmail } from './email/reducers';
import { SET_CART_EMAIL } from './email/types';
import { setOrderInfo } from './order/reudcers';
import { SET_ORDER_INFO } from './order/types';
import {
  setCartSelectedShippingAddress,
  setCartShippingAddresses,
} from './shippingAddress/reducers';
import {
  SET_CART_SELECTED_SHIPPING_ADDRESS,
  SET_CART_SHIPPING_ADDRESSES,
} from './shippingAddress/types';
import {
  getCheckoutAgreements,
  changeCheckoutAgreements,
} from './checkoutAgreements/reducers';
import {
  GET_CHECKOUT_AGREEMENTS,
  CHANGE_CHECKOUT_AGREEMENTS,
} from './checkoutAgreements/types';

const actions = {
  [SET_CART_EMAIL]: setCartEmail,
  [SET_CART_INFO]: setCartInfo,
  [SET_CART_SHIPPING_ADDRESSES]: setCartShippingAddresses,
  [SET_CART_BILLING_ADDRESS]: setCartBillingAddress,
  [SET_CART_SELECTED_SHIPPING_ADDRESS]: setCartSelectedShippingAddress,
  [SET_ORDER_INFO]: setOrderInfo,
  [GET_CHECKOUT_AGREEMENTS]: getCheckoutAgreements,
  [CHANGE_CHECKOUT_AGREEMENTS]: changeCheckoutAgreements,
};

function cartReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}

export default cartReducer;
