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
    cartId,
    cartEmail,
    setEmailOnGuestCart,
    getCustomerCartId,
    getCartInfoAfterMerge,
    setCustomerDefaultAddressToCart,
  } = useEmailCartContext();
  const [
    ,
    {
      signInCustomer,
      setPageLoader,
      getCustomerAddressList,
      setErrorMessage,
      setSuccessMessage,
    },
  ] = useAppContext();

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
          await setEmailOnGuestCart(emailFieldValue);
          setSuccessMessage('Email is successfully attached to your cart.');
          setPageLoader(false);
          return;
        }

        const isSignInSuccess = await signInCustomer(values);

        if (!isSignInSuccess) {
          setPageLoader(false);
          return;
        }

        const customerCartIdPromise = _makePromise(getCustomerCartId);
        // const mergeCartPromise = _makePromise(getCartInfoAfterMerge, cartId);
        const customerAddrListPromise = _makePromise(getCustomerAddressList);

        const [cartInfo] = await Promise.all([
          customerCartIdPromise(),
          customerAddrListPromise(),
        ]);

        if (!isCartHoldingAddressInfo(cartInfo)) {
          await setCustomerDefaultAddressToCart(cartInfo);
        }

        setPageLoader(false);
      } catch (error) {
        setPageLoader(false);
        console.log('GuestEmailFormManager', { error });
      }
    },
    [
      cartId,
      setEmailOnGuestCart,
      setPageLoader,
      signInCustomer,
      setErrorMessage,
      setSuccessMessage,
      getCartInfoAfterMerge,
      getCustomerAddressList,
      setCustomerDefaultAddressToCart,
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
