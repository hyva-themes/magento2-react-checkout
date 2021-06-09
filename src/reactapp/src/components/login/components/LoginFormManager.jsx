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
import { config, LOGIN_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { __ } from '../../../i18n';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';

const initialValues = {
  email: '',
  password: '',
  customerWantsToSignIn: false,
};

const validationSchema = {
  customerWantsToSignIn: YupBool(),
  email: YupString()
    .required(__('Email is required'))
    .email(__('Email is invalid')),
  password: YupString().test(
    'requiredIfSignIn',
    __('Password is required'),
    (value, context) => {
      const sigInStatus = _get(context, 'parent.customerWantsToSignIn');

      if (sigInStatus) {
        return !!value;
      }

      return true;
    }
  ),
};

const EMAIL_FIELD = `${LOGIN_FORM}.email`;

function LoginFormManager({ children }) {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
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
  const loginFormValues = _get(values, LOGIN_FORM);

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
  const formSubmit = async () => {
    const email = _get(loginFormValues, 'email');
    const password = _get(loginFormValues, 'password');
    const customerWantsToSignIn = _get(
      loginFormValues,
      'customerWantsToSignIn'
    );
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
        setPageLoader(false);
        return;
      }

      await getCustomerCartInfo();
      setPageLoader(false);

      window.dispatchEvent(new Event('reload-customer-section-data'));

      // this mergeCarts needed only when we launch react app.
      // when it works in a site, ajaxLogin will merge carts it seems
      if (config.isDevelopmentMode) {
        const customerCartId = _get(loginData, 'data.cart.cartId');
        await mergeCartsRequest(currentCartId, customerCartId);
      }
    } catch (error) {
      setPageLoader(false);
      console.error(error);
    }
  };

  const handleKeyDown = useEnterActionInForm({
    validationSchema,
    submitHandler: formSubmit,
    formId: LOGIN_FORM,
  });

  // Whenever cart-data email info get updated, the email field will be filled with that value
  useEffect(() => {
    if (cartEmail) {
      setFieldValue(EMAIL_FIELD, cartEmail);
      setFieldTouched(EMAIL_FIELD, true);
      setFormEditMode(false);
    }
  }, [cartEmail, setFieldValue, setFormEditMode, setFieldTouched]);

  const formSectionContext = useFormSection({
    id: LOGIN_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  const context = {
    ...formSectionContext,
    editMode,
    setFormToEditMode,
    handleKeyDown,
  };

  return (
    <LoginFormContext.Provider value={context}>
      <Form id={LOGIN_FORM}>{children}</Form>
    </LoginFormContext.Provider>
  );
}

LoginFormManager.propTypes = {
  children: node.isRequired,
};

export default LoginFormManager;
