import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from './common/Button';
import useCheckoutFormContext from '../hook/useCheckoutFormContext';
import { __ } from '../i18n';
import {
  BILLING_ADDR_FORM,
  LOGIN_FORM,
  PAYMENT_METHOD_FORM,
  SHIPPING_ADDR_FORM,
  SHIPPING_METHOD,
} from '../config';
import { _isObjEmpty } from '../utils';
import useAppContext from '../hook/useAppContext';
import { focusOnFormErrorElement, scrollToElement } from '../utils/form';

const customerWantsToSignInField = `${LOGIN_FORM}.customerWantsToSignIn`;
const isBillingSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function PlaceOrder() {
  const { values, errors } = useFormikContext();
  const [, { setErrorMessage }] = useAppContext();
  const {
    checkoutFormValidationSchema,
    submitHandler,
  } = useCheckoutFormContext();

  const handlePerformPlaceOrder = () => {
    const loginErrors = _get(errors, LOGIN_FORM);
    const shippingAddressErrors = _get(errors, SHIPPING_ADDR_FORM);
    const billingAddressErrors = _get(errors, BILLING_ADDR_FORM);
    const shippingMethodErrors = _get(errors, SHIPPING_METHOD);
    const paymentMethodErrors = _get(errors, PAYMENT_METHOD_FORM);
    const isBillingSameAsShipping = _get(values, isBillingSameAsShippingField);

    if (!_isObjEmpty(loginErrors)) {
      const customerWantsToSignIn = _get(values, customerWantsToSignInField);
      setErrorMessage(
        __(
          customerWantsToSignIn
            ? 'Please provide your login details.'
            : 'Please provide your email address.'
        )
      );
      focusOnFormErrorElement(LOGIN_FORM, errors);
      return;
    }

    if (!_isObjEmpty(shippingAddressErrors)) {
      setErrorMessage(__('Please provide your shipping address information.'));
      focusOnFormErrorElement(SHIPPING_ADDR_FORM, errors);
      return;
    }

    if (!_isObjEmpty(billingAddressErrors) && !isBillingSameAsShipping) {
      setErrorMessage(__('Please provide your billing address information.'));
      focusOnFormErrorElement(BILLING_ADDR_FORM, errors);
      return;
    }

    if (!_isObjEmpty(shippingMethodErrors)) {
      setErrorMessage(__('Please select your shipping method.'));
      scrollToElement(SHIPPING_METHOD);
      return;
    }

    if (!_isObjEmpty(paymentMethodErrors)) {
      setErrorMessage(__('Please select your payment method.'));
      scrollToElement(PAYMENT_METHOD_FORM);
      return;
    }

    checkoutFormValidationSchema.validate(values).then(valid => {
      if (valid) {
        submitHandler(values);
      } else {
        setErrorMessage(
          __('Your checkout details are not valid. Please verify your details.')
        );
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-24">
      <Button variant="warning" big click={handlePerformPlaceOrder}>
        {__('Place Order')}
      </Button>
    </div>
  );
}

export default PlaceOrder;
