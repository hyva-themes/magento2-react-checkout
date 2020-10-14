import React from 'react';
import { useCartContext } from '../../context/Cart';
import { CartItem } from './CartItems/CartItem';
import { CartItemSkeleton } from './CartItems/CartItemSkeleton';

export const CartItems = () => {
    const [{ cart }] = useCartContext();

    if (!cart.items.length && cart.loaded) {
        return (
            <div className={'relative bg-white py-6 px-4 text-center'}>
                Your cart is empty, or you are no longer logged in.
            </div>
        );
    }

    return (
        <div
            className={'relative bg-white pb-6 p-4 md:p-0 md:pr-4 text-center'}
        >
            <div className={'hidden md:flex items-start border-b'}>
                <div className={'w-2/5 border-r text-left py-2'}>item</div>
                <div className={'w-1/5 border-r py-2'}>price</div>
                <div className={'w-1/5 border-r py-2'}>quantity</div>
                <div className={'w-1/5 py-2'}>subtotal</div>
            </div>
            {!cart.loaded &&
                [1,2,3].map(id => {
                    return <CartItemSkeleton id={id} />;
                })}
            {cart.loaded &&
                cart.items.map(item => {
                    return <CartItem item={item} />;
                })}
        </div>
    );
};
