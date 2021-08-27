import React, { useEffect } from 'react';
import _get from 'lodash.get';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString, bool as YupBool } from 'yup';

import { __ } from '../../../i18n';
import { LOGIN_FORM } from '../../../config';
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

function LoginFormManager({ children, formikData }) {
  const { loginFormValues } = formikData;
  const { editMode, setFormToEditMode, setFormToViewMode } = useFormEditMode(
    !LocalStorage.getCustomerToken()
  );
  const { cartEmail, setEmailOnGuestCart } = useLoginCartContext();
  const { ajaxLogin, setPageLoader, setErrorMessage, setSuccessMessage } =
    useLoginAppContext();

  const saveEmailOnCartRequest = async (email) => {
    setPageLoader(true);
    await setEmailOnGuestCart(email);
    setSuccessMessage(__('Email address is saved.'));
    setPageLoader(false);
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
      setPageLoader(false);
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

  const formSectionContext = useFormSection({
    formikData,
    initialValues,
    id: LOGIN_FORM,
    validationSchema,
    submitHandler: formSubmit,
  });

  useEffect(() => {
    if (cartEmail) {
      setFormToViewMode();
    }
  }, [cartEmail, setFormToViewMode]);

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
