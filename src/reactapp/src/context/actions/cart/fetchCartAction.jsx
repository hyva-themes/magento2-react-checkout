import { config } from '../../../config';
import { getCustomerCartQuery } from '../../graphql/cart/getCustomerCartQuery';
import { getCartQuery } from '../../graphql/cart/getCartQuery';
import { graphqlRequest } from '../graphqlRequest';

export const fetchCartAction = async dispatch => {
    const query = (config.signInToken && getCustomerCartQuery) || getCartQuery;
    const type = 'FETCH_CART';
    const cartReturnProperty = data =>
        (config.signInToken && data.customerCart) || data.cart;

    await graphqlRequest(dispatch, query, type, cartReturnProperty);
};
