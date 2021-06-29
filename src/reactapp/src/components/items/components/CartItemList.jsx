import React from 'react';

import CartItem from './CartItem';
import { __ } from '../../../i18n';
import useItemsFormContext from '../hooks/useItemsFormContext';

function CartItemList() {
  const { cartItems } = useItemsFormContext();

  return (
    <div className="py-4">
      <div className="">
        <table className="table w-full text-left">
          <thead className="hidden text-left md:table-header-group">
            <tr>
              <th>{__('Item')}</th>
              <th>{__('Qty')}</th>
              <th>{__('Price')}</th>
              <th>{__('Total')}</th>
              <th>
                <span className="sr-only">{__('Actions')}</span>
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <CartItem
                item={cartItem}
                key={cartItem.id}
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
