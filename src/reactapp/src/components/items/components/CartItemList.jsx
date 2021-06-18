import React from 'react';

import CartItem from './CartItem';
import useItemsFormContext from '../hooks/useItemsFormContext';
import { __ } from '../../../i18n';

function CartItemList() {
  const { cartItems } = useItemsFormContext();

  return (
    <div className="py-4">
      <div className="">
        <table className="table w-full">
          <thead className="hidden text-left md:table-header-group">
            <tr>
              <th>{__('Item')}</th>
              <th>{__('Qty')}</th>
              <th>{__('Price')}</th>
              <th>{__('Total')}</th>
              <th>{__('Actions')}</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <CartItem
                key={cartItem.id}
                item={cartItem}
                isLastItem={index === cartItems.length - 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartItemList;
