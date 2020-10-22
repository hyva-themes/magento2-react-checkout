import React from 'react';
import { SkeletonBlock } from '../SkeletonBlock';

export const CartItemSkeleton = (id) => {
    return (
        <div key={id} className={'border-b'}>
            <div
                className={
                    'flex flex-col md:flex-row items-stretch border-b mb-2'
                }
            >
                <div
                    className={
                        'md:border-r flex flex-col md:flex-row items-stretch w-full md:w-2/5 justify-center py-4'
                    }
                >
                    <SkeletonBlock
                        classes={
                            'w-2/3 md:w-1/3 h-64 self-center mb-4 md:mb-0 h-auto mr-0 md:mr-2'
                        }
                    >
                        <span
                            style={{
                                paddingTop: '100%',
                                content: ' ',
                                display: 'block',
                            }}
                        />
                    </SkeletonBlock>
                    <div className={'flex flex-row md:w-2/3 mt-2 md:mt-0'}>
                        <div className={'md:hidden w-1/3 text-right mr-6'}>
                            item
                        </div>
                        <div className={'text-left'}>
                            <SkeletonBlock for={"product-title"}
                                classes={'w-24 h-6 mb-2'}
                            />
                            <SkeletonBlock for={"sku"} classes={'sku w-16 h-6'} />
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
                    <SkeletonBlock for={"price"} classes={'sku w-20 h-6'} />
                </div>
                <div
                    className={
                        'md:w-1/5 md:border-r flex items-center justify-left md:justify-center py-4'
                    }
                >
                    <div className={'w-1/3 md:hidden text-right mr-6'}>
                        quantity
                    </div>
                    <SkeletonBlock for={"price"} classes={'sku w-20 h-6'} />
                </div>
                <div
                    className={
                        'md:w-1/5 flex items-center justify-left md:justify-center py-4'
                    }
                >
                    <div className={'w-1/3 md:hidden text-right mr-6'}>
                        subtotal
                    </div>
                    <SkeletonBlock for={"price"} classes={'sku w-20 h-6'} />
                </div>
            </div>
            <div
                className={
                    'mb-6 w-full sm:w-1/3 text-center sm:text-right md:text-left mr-6 flex'
                }
            >
                <SkeletonBlock
                    for={'edit-icon'}
                    classes={
                        'inline-flex h-5 w-5 p-2 mr-2 border border-primary border-block'
                    }
                />{' '}
                <SkeletonBlock
                    for={'trash-icon'}
                    classes={
                        'inline-flex h-5 w-5 p-2 border border-primary border-block'
                    }
                />
            </div>
        </div>
    );
};
