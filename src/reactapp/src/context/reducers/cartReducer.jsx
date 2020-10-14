import { config } from '../../config';

export const cartReducer = (state, action) => {
    if (action.data?.id) {
        /**
         * Always update the cart ID so that:
         * 1: we always have the most recent ID
         * 2: the customer cart id is replaced with the Masked Cart Token Id
         */
        config.cartId = action.data.id;
    }
    switch (action.type) {
        case 'FETCH_CART_SUCCESS':
        case 'SET_CART_EMAIL_SUCCESS':
        case 'REMOVE_CART_ITEM_SUCCESS':
        case 'UPDATE_CART_ITEMS_SUCCESS':
        case 'SET_CART_SHIPPING_ADDRESS_SUCCESS':
            return {
                ...state,
                errors: false,
                cart: {
                    loaded: true,
                    ...action.data,
                },
            };
        case 'PLACE_ORDER_SUCCESS':
            return {
                ...state,
                errors: false,
                cart: {
                    loaded: true,
                    ...action.data,
                },
                orderId: action.payload.placeOrder.order.order_number,
            };
        case 'FETCH_CART_ERROR':
        case 'SET_CART_EMAIL_ERROR':
        case 'REMOVE_CART_ITEM_ERROR':
        case 'UPDATE_CART_ITEMS_ERROR':
        case 'SET_CART_SHIPPING_ADDRESS_ERROR':
            const cart = action.data
                ? { loaded: true, ...action.data }
                : { ...state.cart };
            return {
                ...state,
                ...cart,
                errors: action.errors,
            };
        default:
            return state;
    }
};
