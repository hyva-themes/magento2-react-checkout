import { setCartBillingAddress } from './billingAddress/reducers';
import { SET_CART_BILLING_ADDRESS } from './billingAddress/types';
import { setCartInfo } from './cart/reducers';
import { SET_CART_INFO } from './cart/types';
import { setCartEmail } from './email/reducers';
import { SET_CART_EMAIL } from './email/types';
import { setGuestCartInfo } from './guestCart/reducers';
import { SET_GUEST_CART_INFO } from './guestCart/types';
import {
  setCartSelectedShippingAddress,
  setCartShippingAddresses,
} from './shippingAddress/reducers';
import {
  SET_CART_SELECTED_SHIPPING_ADDRESS,
  SET_CART_SHIPPING_ADDDRESSES,
} from './shippingAddress/types';

const actions = {
  [SET_CART_EMAIL]: setCartEmail,
  [SET_CART_INFO]: setCartInfo,
  [SET_GUEST_CART_INFO]: setGuestCartInfo,
  [SET_CART_SHIPPING_ADDDRESSES]: setCartShippingAddresses,
  [SET_CART_BILLING_ADDRESS]: setCartBillingAddress,
  [SET_CART_SELECTED_SHIPPING_ADDRESS]: setCartSelectedShippingAddress,
};

function cartReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}

export default cartReducer;
