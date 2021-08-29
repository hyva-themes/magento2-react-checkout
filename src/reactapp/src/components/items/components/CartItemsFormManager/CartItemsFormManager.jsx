import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import { Form } from 'formik';

import { __ } from '../../../../i18n';
import { _objToArray } from '../../../../utils';
import { CART_ITEMS_FORM } from '../../../../config';
import useFormSection from '../../../../hook/useFormSection';
import { formikDataShape } from '../../../../utils/propTypes';
import useItemsAppContext from '../../hooks/useItemsAppContext';
import useItemsCartContext from '../../hooks/useItemsCartContext';
import CartItemsFormContext from '../../context/CartItemsFormContext';
import useEnterActionInForm from '../../../../hook/useEnterActionInForm';
import { prepareCartItemsFormData, prepareCartItemsUniqueId } from './utility';

let initialValues = {};

const validationSchema = {};

const formSubmit = () => {};

function CartItemsFormManager({ children, formikData }) {
  const [itemsUniqueId, setItemsUniqueId] = useState(true);
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
      const cartItemsToUpdate = _objToArray(cartItemsValue);

      if (cartItemsToUpdate.length) {
        setPageLoader(true);
        await updateCartItem({ cartItems: cartItemsToUpdate });
        setSuccessMessage(__('Cart updated successfully.'));
        setPageLoader(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Something went wrong while updating the cart item.'));
      setPageLoader(false);
    }
  };

  useEffect(() => {
    if (!needToPopulateForm || !cartItemsAvailable) {
      return;
    }

    const cartItemFormData = prepareCartItemsFormData(cartItemsArray);
    initialValues = cartItemFormData;
    setFieldValue(CART_ITEMS_FORM, cartItemFormData);
    setItemsUniqueId(cartItemIds);
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
