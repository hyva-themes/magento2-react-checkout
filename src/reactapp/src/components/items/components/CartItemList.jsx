import React from 'react';

import CartItem from './CartItem';
import { __mt } from '../../../i18n';
import { _abs } from '../../../utils';
import useItemsFormContext from '../hooks/useItemsFormContext';

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
              <th>{__mt('Item')}</th>
              <th>{__mt('Qty')}</th>
              <th>{__mt('Price')}</th>
              <th className="hidden xl:table-cell">{__mt('Total')}</th>
              <th>
                <span className="sr-only">{__mt('Actions')}</span>
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
