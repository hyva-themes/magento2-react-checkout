import React, { useEffect, useState } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';
import { bool, object, node, oneOfType } from 'prop-types';

import {
  LOGIN_FORM,
  SHIPPING_METHOD,
  BILLING_ADDR_FORM,
  SHIPPING_ADDR_FORM,
  PAYMENT_METHOD_FORM,
} from '../../config';
import { _emptyFunc } from '../../utils';

function CheckoutFormWrapper({ initialData, children }) {
  const [initDataFilled, setInitDataFilled] = useState(false);
  const { values, setFieldValue } = useFormikContext();
  const loginFormValues = _get(values, LOGIN_FORM, {});
  const billingAddressValues = _get(values, BILLING_ADDR_FORM, {});
  const shippingAddressValues = _get(values, SHIPPING_ADDR_FORM, {});

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
    if (!initialData || initDataFilled) {
      return _emptyFunc();
    }

    const { customer, cart } = initialData;
    const email = _get(customer, 'customer.email', '');
    const billingAddress = _get(cart, 'billing_address', {});
    const shippingAddress = _get(cart, 'shipping_address', {});
    const paymentMethod = _get(cart, 'selected_payment_method', {}) || {};
    const shippingMethod = _get(cart, 'selected_shipping_method', {}) || {};

    /**
     * Without this timer, it seems setFieldValue no longer work for the initial
     * time.
     * We don't need to set the cart items formik states and agreements formik
     * states here as they are dynamic formik states and they work correctly from
     * their form sections itself.
     */
    const timer = setTimeout(async () => {
      await setFieldValue(LOGIN_FORM, { ...loginFormValues, email });
      await setFieldValue(SHIPPING_ADDR_FORM, {
        ...shippingAddressValues,
        ...shippingAddress,
      });
      await setFieldValue(SHIPPING_METHOD, {
        methodCode: shippingMethod.methodCode || '',
        carrierCode: shippingMethod.carrierCode || '',
      });
      await setFieldValue(BILLING_ADDR_FORM, {
        ...billingAddressValues,
        ...billingAddress,
      });
      await setFieldValue(`${PAYMENT_METHOD_FORM}.code`, paymentMethod.code);
      setInitDataFilled(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [
    initialData,
    setFieldValue,
    initDataFilled,
    loginFormValues,
    billingAddressValues,
    shippingAddressValues,
  ]);

  return <>{children}</>;
}

CheckoutFormWrapper.propTypes = {
  children: node.isRequired,
  initialData: oneOfType([object, bool]).isRequired,
};

export default CheckoutFormWrapper;
