import React from 'react';

import CartItem from './CartItem';
import useItemsFormContext from '../hooks/useItemsFormContext';

function CartItemList() {
  const { cartItems } = useItemsFormContext();

  return (
    <div className="py-4">
      <div className="container">
        <div className="tablee">
          <div className="min-h-10">
            <div className="flex font-semibold">
              <div className="flex-grow">Item</div>
              <div className="w-24">Qty</div>
              <div className="w-20">Price</div>
              <div className="w-20">Total</div>
              <div className="w-20">Actions</div>
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
