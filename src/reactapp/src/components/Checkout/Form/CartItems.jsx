import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';
import useCartItemsFormContext from '../../../hook/useCartItemsFormContext';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import TextInput from '../../Common/Form/TextInput/TextInput';
import Header from '../../Common/Header';
import { CART_ITEMS_FORM } from '../../../config';

function CartItems() {
  const { cartItems } = useCartItemsFormContext();
  const { touched } = useFormikContext();

  return (
    <Card bg="dark">
      <Header>Product Details</Header>
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
              {cartItems.map(cartItem => {
                const qtyField = `${CART_ITEMS_FORM}.${cartItem.id}.qty`;
                const isQtyFieldTouched = _get(touched, qtyField);

                return (
                  <div key={cartItem.id} className="flex mb-2 border-b">
                    <div className="flex flex-col flex-grow text-sm">
                      <img
                        className="w-16 h-16"
                        alt={cartItem.productSku}
                        src={cartItem.productSmallImgUrl}
                      />
                      <span>{cartItem.productName}</span>
                      <span>{`(${cartItem.productSku})`}</span>
                    </div>
                    <div className="w-24">
                      <TextInput
                        width="w-10"
                        className="w-10 h-10"
                        name={qtyField}
                      />
                    </div>
                    <div className="w-20 mt-4">{cartItem.price}</div>
                    <div className="w-20 mt-4">{cartItem.rowTotal}</div>
                    <div className="w-20 mt-4">
                      <Button variant="success" disable={!isQtyFieldTouched}>
                        UPDATE
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CartItems;
