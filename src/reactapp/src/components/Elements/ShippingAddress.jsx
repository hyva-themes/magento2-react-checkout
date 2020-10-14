import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/Cart';

export const ShippingAddress = () => {
    const [{ errors }, { setShippingAddress }] = useCartContext();

    return (
        <div className={'mb-6 mr-6'}>
            <button className={'btn btn-primary'} onClick={() => setShippingAddress()}>
                Set Shipping Address
            </button>
        </div>
    );
};
