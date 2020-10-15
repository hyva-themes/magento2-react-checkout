import { graphqlRequest } from '../graphqlRequest';
import { setShippingAddressAndMethodOnCartQuery } from '../../graphql/cart/setShippingAddressAndMethodOnCartQuery';

export const setShippingAddressOnCartAction = async (dispatch, address) => {
    const query = setShippingAddressAndMethodOnCartQuery(address);
    const type = 'SET_CART_SHIPPING_ADDRESS';
    const cartReturnProperty = data => {
        return (
            data.setShippingMethodsOnCart ||
            data.setShippingAddressesOnCart
        );
    };

    await graphqlRequest(dispatch, query, type, cartReturnProperty);
};
