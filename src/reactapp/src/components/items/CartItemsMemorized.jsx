import React from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import CartItemList from './components/CartItemList';
import NoItemsInfoBox from './components/NoItemsInfoBox';
import CartItemsFormManager from './components/CartItemsFormManager';
import { __ } from '../../i18n';
import useItemsCartContext from './hooks/useItemsCartContext';

const CartItemsMemorized = React.memo(({ formikData }) => {
  const { cartItemsAvailable } = useItemsCartContext();

  return (
    <CartItemsFormManager formikData={formikData}>
      <Card classes={cartItemsAvailable ? '' : 'opacity-75'}>
        <Header>{__('Product Details')}</Header>
        {cartItemsAvailable ? <CartItemList /> : <NoItemsInfoBox />}
      </Card>
    </CartItemsFormManager>
  );
});

export default CartItemsMemorized;
