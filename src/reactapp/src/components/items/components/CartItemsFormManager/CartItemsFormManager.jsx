import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';

import { __ } from '../../../../i18n';
import {
  validate,
  prepareCartDataToUpdate,
  prepareCartItemsUniqueId,
  prepareCartItemFormikData,
  prepareCartItemsValidationSchema,
} from './utility';
import { _objToArray } from '../../../../utils';
import { CART_ITEMS_FORM } from '../../../../config';
import useFormSection from '../../../../hook/useFormSection';
import { formikDataShape } from '../../../../utils/propTypes';
import useItemsAppContext from '../../hooks/useItemsAppContext';
import useItemsCartContext from '../../hooks/useItemsCartContext';
import CartItemsFormContext from '../../context/CartItemsFormContext';
import useEnterActionInForm from '../../../../hook/useEnterActionInForm';

let initialValues = {};

const formSubmit = () => {};

function CartItemsFormManager({ children, formikData }) {
  const [itemsUniqueId, setItemsUniqueId] = useState(true);
  const [validationSchema, setValidationSchema] = useState({});
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    useItemsAppContext();
  const { cartItems, updateCartItem, cartItemsAvailable } =
    useItemsCartContext();
  const { cartItemsValue, setFieldValue } = formikData;
  const cartItemsArray = _objToArray(cartItems);
  const cartItemIds = prepareCartItemsUniqueId(cartItemsArray);
  const needToPopulateForm = itemsUniqueId !== cartItemIds;

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
    if (!needToPopulateForm || !cartItemsAvailable) {
      return;
    }

    const cartItemFormData = prepareCartItemFormikData(cartItemsArray);
    initialValues = cartItemFormData;
    setItemsUniqueId(cartItemIds);
    setFieldValue(CART_ITEMS_FORM, cartItemFormData);
    setValidationSchema(prepareCartItemsValidationSchema(cartItemFormData));
  }, [
    cartItemIds,
    setFieldValue,
    cartItemsArray,
    cartItemsAvailable,
    needToPopulateForm,
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
