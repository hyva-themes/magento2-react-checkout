import { graphqlRequest } from '../graphqlRequest';
import { setEmailOnGuestCartQuery } from '../../graphql/cart/setEmailOnGuestCartQuery';

export const setEmailOnGuestCartAction = async (dispatch, email) => {
    const query = setEmailOnGuestCartQuery(email);
    const type = 'SET_CART_EMAIL';
    const cartReturnProperty = data => data.setGuestEmailOnCart?.cart;

    await graphqlRequest(dispatch, query, type, cartReturnProperty);
};
