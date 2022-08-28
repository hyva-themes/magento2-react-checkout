import { useEffect, useState } from 'react';
import { get as _get } from 'lodash-es';
import { useFormikContext } from 'formik';
import { bool, object, node, oneOfType } from 'prop-types';

import {
  LOGIN_FORM,
  SHIPPING_METHOD,
  COUPON_CODE_FORM,
  BILLING_ADDR_FORM,
  SHIPPING_ADDR_FORM,
  PAYMENT_METHOD_FORM,
} from '../../config';
import { _emptyFunc } from '../../utils';

function CheckoutFormWrapper({ initialData, children }) {
  const [initDataFilled, setInitDataFilled] = useState(false);
  const { values, setValues } = useFormikContext();

  // const storeAggregatedFormStates = (aggregatedData) => {
  //   console.log('CheckoutFormWrapper::storeAggregatedFormStates');
  // };

  /**
   * This side effect fill out the checkout formik states from the initial GQL
   * request response.
   *
   * Dealing this in individual form sections is no longer working since we merged
   * multiple GQL requests sends in in the initial time (when page loads) into
   * a singe requests. I suspect this happens because of the huge state mutations
   * happening in the App, Cart global states. So we are dealing with the global
   * checkout formik states here with the help of a small time delay.
   */
  useEffect(() => {
    console.log('CheckoutFormWrapper::useEffect');
    if (!initialData || initDataFilled) {
      return _emptyFunc();
    }

    const { cart, customer } = initialData;
    const email = _get(cart, 'email') || '';
    const appliedCoupon = _get(cart, 'appliedCoupon');
    const loginFormValues = _get(values, LOGIN_FORM) || {};
    const billingAddress = _get(cart, 'billing_address') || {};
    const shippingAddress = _get(cart, 'shipping_address') || {};
    const couponCodeValues = _get(values, COUPON_CODE_FORM) || {};
    const paymentMethod = _get(cart, 'selected_payment_method') || {};
    const billingAddressValues = _get(values, BILLING_ADDR_FORM) || {};
    const shippingMethod = _get(cart, 'selected_shipping_method') || {};
    const paymentMethodValues = _get(values, PAYMENT_METHOD_FORM) || {};
    const shippingAddressValues = _get(values, SHIPPING_ADDR_FORM) || {};

    /**
     * Without this timer, only those values set by the setValue method would be available.
     * In order to populate the dynamic values set by each individual form states we need
     * the below delay.
     *
     * We don't need to set the cart items formik states and agreements formik
     * states here as they are dynamic formik states and they work correctly from
     * their form sections itself.
     */
    const timer = setTimeout(() => {
      const newValues = {
        ...values,
        [LOGIN_FORM]: { ...loginFormValues, email },
        [SHIPPING_ADDR_FORM]: {
          ...shippingAddressValues,
          ...shippingAddress,
          saveInBook: !!customer?.customer?.email,
        },
        [BILLING_ADDR_FORM]: {
          ...billingAddressValues,
          ...billingAddress,
          saveInBook: !!customer?.customer?.email,
        },
        [SHIPPING_METHOD]: {
          methodCode: shippingMethod.methodCode || '',
          carrierCode: shippingMethod.carrierCode || '',
        },
        [PAYMENT_METHOD_FORM]: {
          ...paymentMethodValues,
          code: paymentMethod.code,
        },
        [COUPON_CODE_FORM]: {
          ...couponCodeValues,
          couponCode: appliedCoupon,
        },
      };
      setValues(newValues);
      setInitDataFilled(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [values, initialData, initDataFilled, setValues]);

  return children;
}

CheckoutFormWrapper.propTypes = {
  children: node.isRequired,
  initialData: oneOfType([object, bool]).isRequired,
};

export default CheckoutFormWrapper;
