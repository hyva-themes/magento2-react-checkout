import React from 'react';
import { useCartContext } from '../../context/Cart';

export const EstimatedTotal = () => {
    const [{ cart }] = useCartContext();

    if (!cart.loaded) {
        return (
            <div className={'py-6'}>
                {
                    // placeholder?
                }
            </div>
        );
    }

    if (!cart.prices) {
        return (
            <div className={'py-6'}>
                {
                    // placeholder?
                }
            </div>
        );
    }

    return (
        <div className={'my-4'}>
            <h3
                className={
                    'sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'
                }
            >
                Totals
            </h3>
            <div className={'mt-4 flex items-baseline mb-4'}>
                <span className="w-2/5 text-lg text-left md:text-sm xl:text-base">
                    Subtotal:{' '}
                </span>
                <span className="w-3/5 text-xl text-right md:text-lg">
                    {(cart?.prices?.subtotal_excluding_tax?.value).toLocaleString(
                        false,
                        {
                            style: 'currency',
                            currency:
                                cart?.prices?.subtotal_excluding_tax?.currency,
                        }
                    )}
                </span>
            </div>
            <div className={'mt-4 flex items-baseline'}>
                <span className="w-2/5 text-lg text-left md:text-sm xl:text-base">
                    Order Total:{' '}
                </span>
                <span className="w-3/5 text-3xl font-bold text-right md:text-lg lg:text-2xl">
                    {(cart?.prices?.grand_total?.value).toLocaleString(false, {
                        style: 'currency',
                        currency:
                            cart?.prices?.subtotal_excluding_tax?.currency,
                    })}
                </span>
            </div>
        </div>
    );
};
