import React from 'react';
import { shape, string } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import useItemsFormContext from '../hooks/useItemsFormContext';
import { CART_ITEMS_FORM } from '../../../config';
import { __ } from '../../../i18n';

function CartItem({ item }) {
  const { touched } = useFormikContext();
  const { itemUpdateHandler } = useItemsFormContext();
  const qtyField = `${CART_ITEMS_FORM}.${item.id}.quantity`;
  const isQtyFieldTouched = _get(touched, qtyField);

  return (
    <div className="flex mb-2 border-b">
      <div className="flex flex-col flex-grow text-sm">
        <img
          className="w-16 h-16"
          alt={item.productSku}
          src={item.productSmallImgUrl}
        />
        <span>{item.productName}</span>
        <span>{`(${item.productSku})`}</span>
      </div>
      <div className="w-24">
        <TextInput width="w-10" className="w-10 h-10" name={qtyField} />
      </div>
      <div className="w-20 mt-4">{item.price}</div>
      <div className="w-20 mt-4">{item.rowTotal}</div>
      <div className="w-20 mt-4">
        <Button
          variant="success"
          disable={!isQtyFieldTouched}
          click={itemUpdateHandler}
        >
          {__('UPDATE')}
        </Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: shape({
    id: string,
  }).isRequired,
};

export default CartItem;
