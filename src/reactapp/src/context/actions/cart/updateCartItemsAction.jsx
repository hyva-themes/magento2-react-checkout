import { updateCartItemsQuery } from '../../graphql/cart/updateCartItemsQuery';
import { graphqlRequest } from '../graphqlRequest';

export const updateCartItemsAction = async (
    dispatch,
    cartItemId,
    cartItemQuantity
) => {
    const query = updateCartItemsQuery(cartItemId, cartItemQuantity);
    const type = 'UPDATE_CART_ITEMS';
    const cartReturnProperty = data => data.updateCartItems;

    await graphqlRequest(dispatch, query, type, cartReturnProperty);
};
