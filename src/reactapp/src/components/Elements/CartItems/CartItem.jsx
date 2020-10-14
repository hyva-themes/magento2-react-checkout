import { config } from '../../../config';
import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../../context/Cart';
import TrashIcon from '../../Icons/Trash';
import PencilIcon from '../../Icons/Pencil';

export const CartItem = ({ item }) => {
    const [
        { errors },
        { removeItemFromCart, updateCartItems },
    ] = useCartContext();

    const [itemQuantity, setItemQty] = useState();

    useEffect(() => {
        if ((itemQuantity === undefined && item.quantity) || errors) {
            setItemQty(item.quantity);
        }
    }, [itemQuantity, item.quantity, errors]);

    const updateCartItemsIfChanged = () => {
        if (itemQuantity !== item.quantity) {
            let update = true;
            if (!itemQuantity || itemQuantity <= 0) {
                if (!window.confirm('Do you want to remove this item?')) {
                    update = false;
                    setItemQty(item.quantity);
                } else {
                    setItemQty(0);
                }
            }
            update && updateCartItems(item.id, itemQuantity);
        }
    };

    return (
        <div key={item.id} className={''}>
            <div
                className={
                    'flex flex-col md:flex-row items-stretch border-b mb-2'
                }
            >
                <div
                    className={
                        'md:border-r flex flex-col w-full md:w-2/5 justify-center py-4'
                    }
                >
                    <img
                        className={'w-full self-center pb-4 md:pb-0 lg:px-4'}
                        src={item.product.small_image.url}
                        alt={item.product.small_image.label}
                    />
                    <div className={'flex flex-row w-full'}>
                        <div className={'md:hidden w-1/3 text-right mr-6'}>
                            item
                        </div>
                        <div className={'text-left w-2/3 md:w-full'}>
                            <h2 className={'text-xl'}>{item.product.name}</h2>
                            <p className={'text-sm'}>{item.product.sku}</p>

                            {item.customizable_options && item.customizable_options.map(option => {
                                return (
                                    <div className={'mt-2'}>
                                        <p className={'font-semibold'}>
                                            {option.label}:{' '}
                                        </p>
                                        {option.values && option.values.map(value => {
                                            return <p className={'text-primary'}>{value.label}</p>;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className={
                        'w-full md:w-1/5 md:border-r flex items-center justify-left md:justify-center py-4'
                    }
                >
                    <div className={'w-1/3 md:hidden text-right mr-6'}>
                        price
                    </div>
                    {item.prices.price.value.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                    })}
                </div>
                <div
                    className={
                        'md:w-1/5 md:border-r flex items-center justify-left md:justify-center py-4'
                    }
                >
                    <div className={'w-1/3 md:hidden text-right mr-6'}>
                        quantity
                    </div>
                    <input
                        type={'number'}
                        pattern="[0-9]{0,10}"
                        value={itemQuantity}
                        className={'input input-light w-20 p-1 m-0 text-center'}
                        onChange={event =>
                            setItemQty(
                                event.target.value === ''
                                    ? ''
                                    : parseInt(event.target.value) || 0
                            )
                        }
                        onBlur={() => updateCartItemsIfChanged()}
                        onKeyDown={event =>
                            event.key === 'Enter' && updateCartItemsIfChanged()
                        }
                        min={'0'}
                    />
                </div>
                <div
                    className={
                        'md:w-1/5 flex items-center justify-left md:justify-center py-4'
                    }
                >
                    <div className={'w-1/3 md:hidden text-right mr-6'}>
                        subtotal
                    </div>
                    {item.prices.row_total.value.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                    })}
                </div>
            </div>
            <div
                className={
                    'mb-6 w-full sm:w-1/3 text-center sm:text-right md:text-left mr-6'
                }
            >
                <a
                    className={'btn btn-primary inline-flex mr-2 p-2'}
                    href={`${config.baseUrl}checkout/cart/configure/id/${item.id}/product_id/${item.product.id}/`}
                >
                    <PencilIcon size={16} class={'h-5 w-5'} />
                </a>{' '}
                <button
                    className={'btn btn-primary inline-flex p-2'}
                    onClick={() => removeItemFromCart(item.id)}
                >
                    <TrashIcon size={16} class={'h-5 w-5'} />
                </button>
            </div>
        </div>
    );
};
