import React, { useRef } from 'react';
import { useCartContext } from '../../context/Cart';
import { CartItems } from '../Elements/CartItems';
import { EstimatedTotal } from '../Elements/EstimatedTotal';
import { PlaceOrder } from '../Elements/PlaceOrder';
import { config } from '../../config';
import { BillingAddress } from '../Elements/BillingAddress';
import { useFormikContext } from '../../context/Formik';

export const Main = () => {
    const [{ cart, orderId }, { fetchCart }] = useCartContext();

    const prevCartId = useRef(cart.id);

    const [, { reinitializeForms }] = useFormikContext();

    React.useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    React.useEffect(() => {
        if (prevCartId.current !== cart.id) {
            reinitializeForms(cart);
        }
        prevCartId.current = cart.id;
    }, [cart, cart.id, reinitializeForms]);

    React.useEffect(() => {
        if (orderId) {
            setTimeout(() => {
                window.location.href =
                    config.baseUrl + 'checkout/onepage/success';
            }, 2000);
        }
    }, [orderId]);

    return (
        <>
            {orderId && (
                <div className={'container border-b-2 py-4 px-6 text-center'}>
                    Order successfully placed: {orderId}
                </div>
            )}
            <div className="flex flex-col md:flex-row mb-4 px-6 container">
                <div className="card w-full md:w-2/3 xl:w-3/4 pb-4">
                    <CartItems />
                </div>
                <div className="w-full card bg-container-darker md:w-1/3 xl:w-1/4 p-6">
                    <h2
                        className={
                            'sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'
                        }
                    >
                        Summary
                    </h2>
                    <BillingAddress />
                    <EstimatedTotal />
                    <PlaceOrder />
                </div>
            </div>
        </>
    );
};
