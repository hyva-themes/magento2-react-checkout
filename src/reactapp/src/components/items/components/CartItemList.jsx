import React from 'react';

import CartItem from './CartItem';
import useItemsFormContext from '../hooks/useItemsFormContext';
import { __ } from '../../../i18n';

function CartItemList() {
  const { cartItems } = useItemsFormContext();

  return (
    <div className="py-4">
      <div className="container">
        <div className="tablee">
          <div className="min-h-10">
            <div className="flex font-semibold">
              <div className="flex-grow">{__('Item')}</div>
              <div className="w-24">{__('Qty')}</div>
              <div className="w-20">{__('Price')}</div>
              <div className="w-20">{__('Total')}</div>
              <div className="w-20">{__('Actions')}</div>
            </div>
          </div>

          <div className="table-content">
            {cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemList;
