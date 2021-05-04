import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';

import CartItemsFormContext from '../context/CartItemsFormContext';
import useFormSection from '../../../hook/useFormSection';
import useItemsAppContext from '../hooks/useItemsAppContext';
import useItemsCartContext from '../hooks/useItemsCartContext';
import { _objToArray } from '../../../utils';
import { CART_ITEMS_FORM } from '../../../config';

const initialValues = {};

const validationSchema = {};

const formSubmit = () => {};

function CartItemsFormManager({ children }) {
  const [populateForm, setPopulateForm] = useState(true);
  const { values, setFieldValue } = useFormikContext();
  const {
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
  } = useItemsAppContext();
  const {
    cartItems,
    cartItemsAvailable,
    updateCartItem,
  } = useItemsCartContext();

  const cartItemsArr = _objToArray(cartItems);
  const cartItemsValue = _get(values, 'items');

  const itemUpdateHandler = async () => {
    try {
      const cartItemsToUpdate = _objToArray(cartItemsValue);

      if (cartItemsToUpdate.length) {
        setPageLoader(true);
        await updateCartItem({ cartItems: cartItemsToUpdate });
        setSuccessMessage('Cart updated successfully.');
        setPageLoader(false);
      }
    } catch (error) {
      console.log({ error });
      setErrorMessage('Something went wrong while updating the cart item.');
      setPageLoader(false);
    }
  };

  useEffect(() => {
    if (populateForm && cartItemsAvailable) {
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
  }, [cartItemsArr, cartItemsAvailable, populateForm, setFieldValue]);

  const context = useFormSection({
    id: CART_ITEMS_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <CartItemsFormContext.Provider
      value={{
        ...context,
        cartItems: cartItemsArr,
        cartItemsAvailable: !!cartItemsArr.length,
        itemUpdateHandler,
      }}
    >
      <Form>{children}</Form>
    </CartItemsFormContext.Provider>
  );
}

CartItemsFormManager.propTypes = {
  children: node.isRequired,
};

export default CartItemsFormManager;
