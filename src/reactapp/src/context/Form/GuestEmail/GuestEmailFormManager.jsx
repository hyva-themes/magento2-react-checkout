import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool } from 'yup';

import GuestEmailFormContext from './GuestEmailFormContext';
import { GUEST_EMAIL_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useAppContext from '../../../hook/useAppContext';
import useEmailCartContext from '../../../hook/cart/useEmailCartContext';
import { isCartHoldingAddressInfo } from '../../../utils/address';
import { _makePromise } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';

const initialValues = {
  email: '',
  password: '',
  customerWantsToSignin: false,
};

const validationSchema = {
  customerWantsToSignin: YupBool(),
  email: YupString()
    .required('Email is required')
    .email('Email is invalid'),
  password: YupString().test(
    'requiredIfSignIn',
    'Password is required',
    (value, context) => {
      const sigInStatus = _get(context, 'parent.customerWantsToSignin');

      if (sigInStatus) {
        return !!value;
      }

      return true;
    }
  ),
};

const EMAIL_FIELD = 'email.email';

function GuestEmailFormManager({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const {
    cartEmail,
    setEmailOnGuestCart,
    createEmptyCart,
    getCustomerCartId,
    mergeCarts,
    getCustomerCartInfo,
    setCustomerDefaultAddressToCart,
  } = useEmailCartContext();
  const [
    ,
    {
      signInCustomer,
      setPageLoader,
      getCustomerAddressList,
      setSuccessMessage,
    },
  ] = useAppContext();

  const saveEmailOnCartRequest = useCallback(
    async email => {
      setPageLoader(true);
      await setEmailOnGuestCart(email);
      setSuccessMessage('Email is successfully attached to your cart.');
      setPageLoader(false);
    },
    [setPageLoader, setEmailOnGuestCart, setSuccessMessage]
  );

  const collectCustomerCartAndAddressInfoRequest = useCallback(async () => {
    const customerCartIdPromise = _makePromise(getCustomerCartId);
    const customerAddrListPromise = _makePromise(getCustomerAddressList);

    const [customerCartId] = await Promise.all([
      customerCartIdPromise(),
      customerAddrListPromise(),
    ]);

    return customerCartId;
  }, [getCustomerCartId, getCustomerAddressList]);

  const mergeCurrentCartToCustomerCartRequest = useCallback(
    async customerCartId => {
      let cartInfo;
      const cartIdInCache = LocalStorage.getCartId();

      if (!customerCartId) {
        const newCartId = await createEmptyCart();
        cartInfo = await mergeCarts({
          sourceCartId: cartIdInCache,
          destinationCartId: newCartId,
        });
      } else if (customerCartId !== cartIdInCache) {
        cartInfo = await mergeCarts({
          sourceCartId: cartIdInCache,
          destinationCartId: customerCartId,
        });
      }
      return cartInfo;
    },
    [createEmptyCart, mergeCarts]
  );

  /**
   * Sign-in submit is handled here
   *
   * If user choose to continue as guest user, then attach the email address
   * provided to the cart.
   *
   * If user choose to login and proceed, then sign-in the user, then retrieve
   * customer cart details, then finally, merge the guest cart with the customer
   * cart.
   */
  const formSubmit = useCallback(
    async values => {
      const emailFieldValue = _get(values, 'email');
      const customerWantsToSignin = _get(values, 'customerWantsToSignin');

      try {
        setPageLoader(true);

        if (!customerWantsToSignin) {
          await saveEmailOnCartRequest(emailFieldValue);
          return;
        }

        const isSignInSuccess = await signInCustomer(values);

        if (!isSignInSuccess) {
          setPageLoader(false);
          return;
        }

        const customerCartId = await collectCustomerCartAndAddressInfoRequest();
        const cartInfo = await mergeCurrentCartToCustomerCartRequest(
          customerCartId
        );

        if (!isCartHoldingAddressInfo(cartInfo)) {
          await setCustomerDefaultAddressToCart(cartInfo);
          await getCustomerCartInfo();
        }

        setPageLoader(false);
      } catch (error) {
        setPageLoader(false);
        console.log('GuestEmailFormManager', { error });
      }
    },
    [
      setPageLoader,
      signInCustomer,
      getCustomerCartInfo,
      setCustomerDefaultAddressToCart,
      saveEmailOnCartRequest,
      mergeCurrentCartToCustomerCartRequest,
      collectCustomerCartAndAddressInfoRequest,
    ]
  );

  // Whenever cart-data email info get udpated, the email field will be filled with that value
  useEffect(() => {
    if (cartEmail) {
      setFieldValue(EMAIL_FIELD, cartEmail);
      setFieldTouched(EMAIL_FIELD, true);
      setFormEditMode(false);
    }
  }, [cartEmail, setFieldValue, setFormEditMode, setFieldTouched]);

  const context = useFormSection({
    id: GUEST_EMAIL_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <GuestEmailFormContext.Provider
      value={{ ...context, editMode, setFormToEditMode }}
    >
      <Form>{children}</Form>
    </GuestEmailFormContext.Provider>
  );
}

GuestEmailFormManager.propTypes = {
  children: node.isRequired,
};

export default GuestEmailFormManager;
