import React from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import CartItemList from './components/CartItemList';
import NoItemsInfoBox from './components/NoItemsInfoBox';
import CartItemsFormManager from './components/CartItemsFormManager';
import useItemsCartContext from './hooks/useItemsCartContext';

function CartItemsForm() {
  const { cartItemsAvailable } = useItemsCartContext();

  return (
    <CartItemsFormManager>
      <Card bg="dark" classes={cartItemsAvailable ? '' : 'opacity-75'}>
        <Header>Product Details</Header>
        {cartItemsAvailable ? <CartItemList /> : <NoItemsInfoBox />}
      </Card>
    </CartItemsFormManager>
  );
}

export default CartItemsForm;
