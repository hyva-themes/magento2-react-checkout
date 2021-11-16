import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import CartItemList from './components/CartItemList';
import NoItemsInfoBox from './components/NoItemsInfoBox';
import CartItemsFormManager from './components/CartItemsFormManager';
import { __ } from '../../../../i18n';
import { formikDataShape } from '../../../../utils/propTypes';
import { useItemsCartContext } from '../../../code/items/hooks';

const CartItemsMemorized = React.memo(({ formikData }) => {
  const { cartItemsAvailable } = useItemsCartContext();

  return (
    <CartItemsFormManager formikData={formikData}>
      <Card classes={cartItemsAvailable ? '' : 'opacity-75'}>
        <ToggleBox show title={__('Product Details')}>
          {cartItemsAvailable ? <CartItemList /> : <NoItemsInfoBox />}
        </ToggleBox>
      </Card>
    </CartItemsFormManager>
  );
});

CartItemsMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default CartItemsMemorized;
