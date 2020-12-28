import { setCartEmail } from './email/reducers';

const actions = {
  SET_CART_EMAIL: setCartEmail,
};

function cartReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}

export default cartReducer;
