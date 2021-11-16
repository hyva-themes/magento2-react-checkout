import React from 'react';

import CartItem from './CartItem';
import { __ } from '../../../../../i18n';
import { _abs } from '../../../../../utils';
import { useItemsFormContext } from '../../../../code/items/hooks';

function CartItemList() {
  const { cartItems, setFieldValue, setFieldTouched } = useItemsFormContext();

  /**
   * Handler function deals with qty update.
   *
   * 🚫 We don't want the qty set to a negative value
   */
  const handleQtyUpdate = (event) => {
    const newValue = _abs(event.target.value);
    const fieldName = event.target.name;
    setFieldTouched(fieldName, newValue);
    setFieldValue(fieldName, newValue);
  };

  return (
    <div className="py-4">
      <div className="">
        <table className="table w-full text-left">
          <thead className="hidden text-left md:table-header-group">
            <tr>
              <th>{__('Item')}</th>
              <th>{__('Qty')}</th>
              <th>{__('Price')}</th>
              <th className="hidden xl:table-cell">{__('Subtotal')}</th>
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
                actions={{ handleQtyUpdate }}
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
