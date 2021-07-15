import React, { useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form } from 'formik';
import { string as YupString, bool as YupBool } from 'yup';

import { __ } from '../../../i18n';
import { config, LOGIN_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import useFormSection from '../../../hook/useFormSection';
import LoginFormContext from '../context/LoginFormContext';
import { formikDataShape } from '../../../utils/propTypes';
import useFormEditMode from '../../../hook/useFormEditMode';
import useLoginAppContext from '../hooks/useLoginAppContext';
import useLoginCartContext from '../hooks/useLoginCartContext';
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

function LoginFormManager({ children, formikData }) {
  const { loginFormValues, setFieldValue, setFieldTouched } = formikData;
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const {
    cartEmail,
    mergeCarts,
    createEmptyCart,
    setEmailOnGuestCart,
    getCustomerCartInfo,
  } = useLoginCartContext();
  const {
    ajaxLogin,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  } = useLoginAppContext();

  const saveEmailOnCartRequest = async email => {
    setPageLoader(true);
    await setEmailOnGuestCart(email);
    setSuccessMessage(__('Email address is saved.'));
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
    formikData,
    validationSchema,
    submitHandler: formSubmit,
  });

  // Whenever cart-data email info get updated, the email field will be filled with that value
  useEffect(() => {
    if (cartEmail) {
      setFieldValue(EMAIL_FIELD, cartEmail);
      // formik bug: we need to call this in setTimeout; else errors persist
      setTimeout(() => setFieldTouched(EMAIL_FIELD, true));
      setFormEditMode(false);
    }
  }, [cartEmail, setFieldValue, setFormEditMode, setFieldTouched]);

  const formSectionContext = useFormSection({
    formikData,
    initialValues,
    id: LOGIN_FORM,
    validationSchema,
    submitHandler: formSubmit,
  });

  const context = {
    ...formikData,
    ...formSectionContext,
    editMode,
    formikData,
    handleKeyDown,
    setFormToEditMode,
  };

  return (
    <LoginFormContext.Provider value={context}>
      <Form id={LOGIN_FORM}>{children}</Form>
    </LoginFormContext.Provider>
  );
}

LoginFormManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default LoginFormManager;
