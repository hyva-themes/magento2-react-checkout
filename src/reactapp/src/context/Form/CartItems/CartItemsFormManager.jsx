import React, { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import { Form, useFormikContext } from 'formik';

import CartItemsFormContext from './CartItemsFormContext';
import useFormSection from '../../../hook/useFormSection';
import { CART_ITEMS_FORM } from '../../../config';
import useCartContext from '../../../hook/useCartContext';
import { _objToArray } from '../../../utils';

const initialValues = {};

const validationSchema = {};

const formSubmit = () => {};

function CartItemsFormManager({ children }) {
  const [populateForm, setPopulateForm] = useState(true);
  const { cartItems } = useCartContext();
  const { setFieldValue } = useFormikContext();
  const cartItemsArr = useMemo(() => _objToArray(cartItems), [cartItems]);

  useEffect(() => {
    if (populateForm) {
      const cartItemFormData = cartItemsArr.reduce((formData, item) => {
        // eslint-disable-next-line no-param-reassign
        formData[item.id] = { qty: item.quantity, sku: item.productSku };
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
      value={{ ...context, cartItems: cartItemsArr }}
    >
      <Form>{children}</Form>
    </CartItemsFormContext.Provider>
  );
}

CartItemsFormManager.propTypes = {
  children: node.isRequired,
};

export default CartItemsFormManager;
