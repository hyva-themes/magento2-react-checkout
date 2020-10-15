import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from 'react';
import {
    updateCartItemsAction,
    removeItemFromCartAction,
    fetchCartAction,
    setShippingAddressOnCartAction,
    placeOrderAction, setEmailOnGuestCartAction,
} from './actions/cart';
import { cartReducer } from './reducers';

const CartContext = createContext();

const initialState = {
    errors: false,
    orderId: false,
    cart: {
        loaded: false,
        email: null,
        id: null,
        billing_address: null,
        shipping_addresses: [],
        items: [],
        available_payment_methods: [],
        selected_payment_method: { code: '', title: '' },
        applied_coupons: null,
        prices: {},
        is_virtual: false,
    },
};

export const CartContextProvider = props => {
    const { children } = props;

    // initialize reducer with initialState { cart }
    const [CartState, dispatch] = useReducer(cartReducer, initialState);

    // initialize actions for this context into an API object
    const CartApi = GetCartApi(dispatch);

    /* create contextValue as an array with objects state+api.
     * State and Actions can be accessed as:
     * const [{ stateObject }, { actionName }] = use[ContextName]Context();
     * For example:
     * const [{ cart }, { fetchCart }] = useCartContext();
     */
    const contextValue = useMemo(() => [CartState, CartApi], [
        CartState,
        CartApi,
    ]);

    // Add the context as a HOC wrapper around passed Children
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

const GetCartApi = dispatch => {
    const fetchCart = useCallback(() => fetchCartAction(dispatch), [dispatch]);
    const removeItemFromCart = useCallback(
        cartItemId => removeItemFromCartAction(dispatch, cartItemId),
        [dispatch]
    );
    const updateCartItems = useCallback(
        (cartItemId, cartItemQuantity) =>
            updateCartItemsAction(dispatch, cartItemId, cartItemQuantity),
        [dispatch]
    );

    const setEmailOnGuestCart = useCallback(
        email => setEmailOnGuestCartAction(dispatch, email),
        [dispatch]
    );

    const setShippingAddress = useCallback(
        address => setShippingAddressOnCartAction(dispatch, address),
        [dispatch]
    );
    const placeOrder = useCallback(address => placeOrderAction(dispatch, address), [
        dispatch,
    ]);
    return useMemo(
        () => ({
            fetchCart,
            removeItemFromCart,
            updateCartItems,
            setEmailOnGuestCart,
            setShippingAddress,
            placeOrder,
            dispatch,
        }),
        [
            fetchCart,
            removeItemFromCart,
            updateCartItems,
            setEmailOnGuestCart,
            setShippingAddress,
            placeOrder,
            dispatch,
        ]
    );
};

export const useCartContext = () => useContext(CartContext);
