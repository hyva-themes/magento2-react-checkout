import React, { useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool } from 'yup';

import LoginFormContext from '../context/LoginFormContext';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useLoginCartContext from '../hooks/useLoginCartContext';
import useLoginAppContext from '../hooks/useLoginAppContext';
import { GUEST_EMAIL_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { __ } from '../../../i18n';

const initialValues = {
  email: '',
  password: '',
  customerWantsToSignin: false,
};

const validationSchema = {
  customerWantsToSignin: YupBool(),
  email: YupString()
    .required(__('Email is required'))
    .email(__('Email is invalid')),
  password: YupString().test(
    'requiredIfSignIn',
    __('Password is required'),
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

function LoginFormManager({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const {
    cartEmail,
    setEmailOnGuestCart,
    createEmptyCart,
    mergeCarts,
    getCustomerCartInfo,
  } = useLoginCartContext();
  const {
    ajaxLogin,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
  } = useLoginAppContext();

  const saveEmailOnCartRequest = async email => {
    setPageLoader(true);
    await setEmailOnGuestCart(email);
    setSuccessMessage(__('Email is successfully attached to your cart.'));
    setPageLoader(false);
  };

  const mergeCartsRequest = async (currentCartId, customerCartId) => {
    let cartInfo;

    if (!customerCartId) {
      const newCartId = await createEmptyCart();
      cartInfo = await mergeCarts({
        sourceCartId: currentCartId,
        destinationCartId: newCartId,
      });
    } else if (customerCartId !== currentCartId) {
      cartInfo = await mergeCarts({
        sourceCartId: currentCartId,
        destinationCartId: customerCartId,
      });
    }

    return cartInfo;
  };

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
  const formSubmit = async values => {
    const email = _get(values, 'email');
    const password = _get(values, 'password');
    const customerWantsToSignIn = _get(values, 'customerWantsToSignin');
    const currentCartId = LocalStorage.getCartId();

    try {
      setPageLoader(true);

      if (!customerWantsToSignIn) {
        await saveEmailOnCartRequest(email);
        setPageLoader(false);
        return;
      }

      const loginData = await ajaxLogin({ username: email, password });

      if (loginData.errors) {
        setErrorMessage(__(loginData.message || 'Login failed.'));
      }

      await getCustomerCartInfo();
      setPageLoader(false);

      window.dispatchEvent(new Event('reload-customer-section-data'));

      // this mergeCarts needed only when we launch react app.
      // when it works in a site, ajaxLogin will merge carts it seems
      const customerCartId = _get(loginData, 'data.cart.cartId');
      await mergeCartsRequest(currentCartId, customerCartId);
    } catch (error) {
      setPageLoader(false);
      console.error(error);
    }
  };

  // Whenever cart-data email info get updated, the email field will be filled with that value
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
    <LoginFormContext.Provider
      value={{ ...context, editMode, setFormToEditMode }}
    >
      <Form>{children}</Form>
    </LoginFormContext.Provider>
  );
}

LoginFormManager.propTypes = {
  children: node.isRequired,
};

export default LoginFormManager;
