import { removeItemFromCartQuery } from '../../graphql/cart/removeItemFromCartQuery';
import { graphqlRequest } from '../graphqlRequest';

export const removeItemFromCartAction = async (dispatch, cartItemId) => {
    const query = removeItemFromCartQuery(cartItemId);
    const type = 'REMOVE_CART_ITEM';
    const cartReturnProperty = data => data.removeItemFromCart?.cart;

    await graphqlRequest(dispatch, query, type, cartReturnProperty);

};
