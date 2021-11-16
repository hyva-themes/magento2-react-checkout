import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';

import {
  validate,
  prepareCartDataToUpdate,
  prepareCartItemsUniqueId,
  prepareCartItemFormikData,
  prepareCartItemsValidationSchema,
} from './utility';
import { __ } from '../../../../i18n';
import { _objToArray } from '../../../../utils';
import { CartItemsFormContext } from '../context';
import { CART_ITEMS_FORM } from '../../../../config';
import { formikDataShape } from '../../../../utils/propTypes';
import { useItemsAppContext, useItemsCartContext } from '../hooks';
import { useFormSection, useEnterActionInForm } from '../../../../hooks';

let initialValues = {};

const formSubmit = () => {};

function CartItemsFormManager({ children, formikData }) {
  const [isFilled, setIsFilled] = useState(false);
  const [validationSchema, setValidationSchema] = useState({});
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    useItemsAppContext();
  const { cartItems, updateCartItem, cartItemsAvailable } =
    useItemsCartContext();
  const { cartItemsValue, setFieldValue } = formikData;
  const cartItemsArray = _objToArray(cartItems);
  const cartItemIds = prepareCartItemsUniqueId(cartItemsArray);

  const itemUpdateHandler = async () => {
    try {
      setMessage(false);
      const isValid = await validate(validationSchema, cartItemsValue);
      const cartItemsToUpdate = prepareCartDataToUpdate(cartItemsValue);

      if (!isValid) {
        return;
      }

      if (cartItemsToUpdate.length) {
        setPageLoader(true);
        await updateCartItem({ cartItems: cartItemsToUpdate });
        setSuccessMessage(__('Cart updated successfully.'));
        setPageLoader(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      setPageLoader(false);
    }
  };

  useEffect(() => {
    if (isFilled || !cartItemsAvailable) {
      return;
    }

    const cartItemFormData = prepareCartItemFormikData(cartItemsArray);
    initialValues = cartItemFormData;
    setFieldValue(CART_ITEMS_FORM, cartItemFormData);
    setValidationSchema(prepareCartItemsValidationSchema(cartItemFormData));
    setIsFilled(true);
  }, [
    isFilled,
    cartItemIds,
    setFieldValue,
    cartItemsArray,
    cartItemsAvailable,
  ]);

  const handleKeyDown = useEnterActionInForm({
    formikData,
    validationSchema,
    submitHandler: itemUpdateHandler,
  });

  const formSectionContext = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: CART_ITEMS_FORM,
    submitHandler: formSubmit,
  });

  const context = {
    ...formSectionContext,
    ...formikData,
    formikData,
    handleKeyDown,
    itemUpdateHandler,
    cartItems: cartItemsArray,
    cartItemsAvailable: !!cartItemsArray.length,
  };

  return (
    <CartItemsFormContext.Provider value={context}>
      <Form id={CART_ITEMS_FORM}>{children}</Form>
    </CartItemsFormContext.Provider>
  );
}

CartItemsFormManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default CartItemsFormManager;
