import React from 'react';
import { useCartContext } from '../../context/Cart';
import { useFormikContext } from '../../context/Formik';
import { useAppContext } from '../../context/App';

const getCurrencySymbol = (locale, currency) =>
    (0)
        .toLocaleString(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        .replace(/\w/g, '')
        .trim();

export const PlaceOrder = () => {
    const [{ cart }, { placeOrder }] = useCartContext();
    const [
        { BillingAddressForm },
        { touchAndValidateForm },
    ] = useFormikContext();
    const [, { setBillingOpen }] = useAppContext();

    const { loaded, items, shipping_addresses } = cart;

    const canPlaceOrder = () => {
        return (
            loaded &&
            items.length &&
            !(!cart.is_virtual && !shipping_addresses.length)
        );
    };

    const submitHandler = async () => {

        const BillingAddressFormIsValid = await touchAndValidateForm(
            BillingAddressForm
        )
            .then(() => {
                return true;
            })
            .catch(() => {
                setBillingOpen(true);
                window.dispatchMessages([
                    {
                        type: 'warning',
                        text:
                            'Please check the Billing Address for invalid input.',
                    },
                ], 5000);
                return false;
            });
        if (BillingAddressFormIsValid) {
            console.log('place order');
            placeOrder({ address: BillingAddressForm.values });
        } else {
            console.log('did not place order');
        }
    };
    if(!cart.is_virtual){
        return (
            <div className={'mt-2'}>
                <p class={'mt-2'}>Checkout is currently only possible with Virtual Items.</p>
            </div>
        );
    }
    return (
        <div className={'mt-2'}>
            {!canPlaceOrder() && (
                <p class={'mt-2'}>Please complete all required fields.</p>
            )}
            <button
                type={'submit'}
                disabled={!canPlaceOrder()}
                className={
                    'disabled:opacity-75 btn btn-primary w-full justify-center'
                }
                onClick={submitHandler}
            >
                Place Order
            </button>
        </div>
    );
};
