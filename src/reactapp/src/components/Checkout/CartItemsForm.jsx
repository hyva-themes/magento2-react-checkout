import React from 'react';
import CartItemsFormManager from '../../context/Form/CartItems/CartItemsFormManager';
import CartItems from './Form/CartItems';

function CartItemsForm() {
  return (
    <CartItemsFormManager>
      <CartItems />
    </CartItemsFormManager>
  );
}

export default CartItemsForm;
