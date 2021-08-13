import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import { Form } from 'formik';

import { __ } from '../../../../i18n';
import { _objToArray } from '../../../../utils';
import { CART_ITEMS_FORM } from '../../../../config';
import { prepareCartItemsUniqueId } from './utility';
import useFormSection from '../../../../hook/useFormSection';
import { formikDataShape } from '../../../../utils/propTypes';
import useItemsAppContext from '../../hooks/useItemsAppContext';
import useItemsCartContext from '../../hooks/useItemsCartContext';
import CartItemsFormContext from '../../context/CartItemsFormContext';
import useEnterActionInForm from '../../../../hook/useEnterActionInForm';

const initialValues = {};

const validationSchema = {};

const formSubmit = () => {};

function CartItemsFormManager({ children, formikData }) {
  const { setPageLoader, setErrorMessage, setSuccessMessage } =
    useItemsAppContext();
  const { cartItems, updateCartItem, cartItemsAvailable } =
    useItemsCartContext();
  const { cartItemsValue, setFieldValue } = formikData;
  const [itemsUniqueId, setItemsUniqueId] = useState(true);
  const cartItemsArr = _objToArray(cartItems);
  const cartItemIds = prepareCartItemsUniqueId(cartItemsArr);
  const needToPopulateForm = itemsUniqueId !== cartItemIds;

  const itemUpdateHandler = async () => {
    try {
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
    if (needToPopulateForm && cartItemsAvailable) {
      const cartItemFormData = cartItemsArr.reduce((accumulator, item) => {
        const cartItemId = parseInt(item.id, 10);
        accumulator[cartItemId] = {
          cart_item_id: cartItemId,
          quantity: parseFloat(item.quantity),
        };
        return accumulator;
      }, {});
      setItemsUniqueId(cartItemIds);
      setFieldValue(CART_ITEMS_FORM, cartItemFormData);
    }
  }, [
    cartItemIds,
    cartItemsArr,
    setFieldValue,
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
    cartItems: cartItemsArr,
    cartItemsAvailable: !!cartItemsArr.length,
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
