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
            <div className={'mt-4 flex items-baseline mb-4'}>
                <span className="w-2/5 text-left text-lg md:text-sm xl:text-base">
                    Subtotal:{' '}
                </span>
                <span className="w-3/5 text-right text-xl md:text-lg">
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
                <span className="w-2/5 text-left text-lg md:text-sm xl:text-base">
                    Order Total:{' '}
                </span>
                <span className="w-3/5 text-right text-3xl md:text-lg lg:text-2xl font-bold">
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
