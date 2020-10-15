import { graphqlRequest } from '../graphqlRequest';
import { placeOrderQuery } from '../../graphql/cart/placeOrderQuery';

export const placeOrderAction = async (dispatch, address) => {
    const query = placeOrderQuery(address);
    const type = 'PLACE_ORDER';
    const cartReturnProperty = data => {
        return (
            data.setPaymentMethodOnCart ||
            data.setBillingAddressOnCart
        );
    };

    await graphqlRequest(dispatch, query, type, cartReturnProperty);
};
