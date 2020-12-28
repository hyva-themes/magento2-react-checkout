import { graphqlRequest } from '../../actions/graphqlRequest';
import { SET_CART_EMAIL } from './types';

export function setEmailOnGuestCartAction(dispatch, email) {
  dispatch({
    type: SET_CART_EMAIL,
    payload: { email },
  });
}
