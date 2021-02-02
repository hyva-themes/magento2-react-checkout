import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';

import CartItemsFormContext from './CartItemsFormContext';
import useFormSection from '../../../hook/useFormSection';
import { CART_ITEMS_FORM } from '../../../config';
import useCartContext from '../../../hook/useCartContext';
import { _objToArray } from '../../../utils';
import useAppContext from '../../../hook/useAppContext';

const initialValues = {};

const validationSchema = {};

const formSubmit = () => {};

function CartItemsFormManager({ children }) {
  const [populateForm, setPopulateForm] = useState(true);
  const { cartItems, updateCartItem } = useCartContext();
  const [, { setPageLoader }] = useAppContext();
  const { values, setFieldValue } = useFormikContext();
  const cartItemsArr = useMemo(() => _objToArray(cartItems), [cartItems]);
  const cartItemsValue = _get(values, 'items');

  const itemUpdateHandler = useCallback(async () => {
    try {
      const cartItemsToUpdate = _objToArray(cartItemsValue);

      if (cartItemsToUpdate.length) {
        setPageLoader(true);
        await updateCartItem({ cartItems: cartItemsToUpdate });
        populateForm(true);
        setPageLoader(false);
      }
    } catch (error) {
      setPageLoader(false);
    }
  }, [cartItemsValue, updateCartItem, setPageLoader, populateForm]);

  useEffect(() => {
    if (populateForm) {
      const cartItemFormData = cartItemsArr.reduce((formData, item) => {
        const cartItemId = parseInt(item.id, 10);
        // eslint-disable-next-line no-param-reassign
        formData[cartItemId] = {
          quantity: parseFloat(item.quantity),
          cart_item_id: cartItemId,
        };
        return formData;
      }, {});
      setPopulateForm(false);
      setFieldValue(CART_ITEMS_FORM, cartItemFormData);
    }
  }, [cartItemsArr, populateForm, setFieldValue]);

  const context = useFormSection({
    id: CART_ITEMS_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <CartItemsFormContext.Provider
      value={{ ...context, cartItems: cartItemsArr, itemUpdateHandler }}
    >
      <Form>{children}</Form>
    </CartItemsFormContext.Provider>
  );
}

CartItemsFormManager.propTypes = {
  children: node.isRequired,
};

export default CartItemsFormManager;
