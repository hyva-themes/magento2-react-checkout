import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { get as _get } from 'lodash-es';
import { string as YupString, bool as YupBool } from 'yup';

import {
  useLoginAppContext,
  useLoginCartContext,
  usePlaceOrderEmailSave,
} from '../hooks';
import { __ } from '../../../i18n';
import { LOGIN_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import LoginFormContext from '../context/LoginFormContext';
import { formikDataShape } from '../../../utils/propTypes';
import useFormEditMode from '../../../hook/useFormEditMode';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';
import useCheckoutFormContext from '../../../hook/useCheckoutFormContext';

const defaultValues = {
  email: '',
  password: '',
  customerWantsToSignIn: false,
};

const validationSchema = {
  customerWantsToSignIn: YupBool(),
  email: YupString()
    .nullable()
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
  const [initialValues, setInitialValues] = useState(defaultValues);
  const {
    ajaxLogin,
    setMessage,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  } = useLoginAppContext();
  const beforePlaceOrderAction = usePlaceOrderEmailSave();
  const { cartEmail, setEmailOnGuestCart } = useLoginCartContext();
  const { editMode, setFormToEditMode, setFormToViewMode } = useFormEditMode();
  const { aggregatedData, registerBeforePlaceOrderAction } =
    useCheckoutFormContext();

  const { loginFormValues, setFieldTouched } = formikData;

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
    setMessage(false);

    const email = _get(loginFormValues, 'email');
    const password = _get(loginFormValues, 'password');
    const customerWantsToSignIn = _get(
      loginFormValues,
      'customerWantsToSignIn'
    );

    try {
      setPageLoader(true);

      if (!customerWantsToSignIn) {
        await setEmailOnGuestCart(email);
        setSuccessMessage(__('Email address is saved.'));
        setFormToViewMode();
        setFieldTouched(`${LOGIN_FORM}.email`, false);
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

  /**
   * Perform email address save just before placeorder happens if in case
   * the email address is not updated yet.
   */
  useEffect(() => {
    registerBeforePlaceOrderAction(
      'saveEmailInformation',
      beforePlaceOrderAction,
      10
    );
  }, [beforePlaceOrderAction, registerBeforePlaceOrderAction]);

  // Update initialvalues based on the initial cart data fetch.
  useEffect(() => {
    if (aggregatedData) {
      const email = aggregatedData?.cart?.email || '';
      setInitialValues({ ...defaultValues, email });
    }
  }, [aggregatedData]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
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
