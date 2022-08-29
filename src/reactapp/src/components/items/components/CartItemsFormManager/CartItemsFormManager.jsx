import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';

import {
  validate,
  prepareCartDataToUpdate,
  prepareCartItemFormikData,
  prepareCartItemsValidationSchema,
} from './utility';
import { __ } from '../../../../i18n';
import { _objToArray } from '../../../../utils';
import { CART_ITEMS_FORM } from '../../../../config';
import useFormSection from '../../../../hook/useFormSection';
import { formikDataShape } from '../../../../utils/propTypes';
import useItemsAppContext from '../../hooks/useItemsAppContext';
import useItemsCartContext from '../../hooks/useItemsCartContext';
import CartItemsFormContext from '../../context/CartItemsFormContext';
import useEnterActionInForm from '../../../../hook/useEnterActionInForm';
import useCheckoutFormContext from '../../../../hook/useCheckoutFormContext';

const formSubmit = () => {};

function CartItemsFormManager({ children, formikData }) {
  const [initialValues, setInitialValues] = useState({});
  const [validationSchema, setValidationSchema] = useState({});
  const { aggregatedData } = useCheckoutFormContext();
  const { updateCartItem, cartItems } = useItemsCartContext();
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    useItemsAppContext();
  const { cartItemsValue } = formikData;
  const cartItemsArray = _objToArray(cartItems);

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
    if (aggregatedData) {
      const itemsInitialData = _objToArray(aggregatedData?.cart?.items || {});
      const cartItemFormData = prepareCartItemFormikData(itemsInitialData);
      setInitialValues(cartItemFormData);
      setValidationSchema(prepareCartItemsValidationSchema(cartItemFormData));
    }
  }, [aggregatedData]);

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

  // eslint-disable-next-line react/jsx-no-constructed-context-values
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
