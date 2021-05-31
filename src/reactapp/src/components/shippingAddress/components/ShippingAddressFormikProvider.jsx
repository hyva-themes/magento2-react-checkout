import React, { useCallback, useEffect, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import {
  string as YupString,
  array as YupArray,
  boolean as YupBoolean,
} from 'yup';

import ShippingAddressFormContext from '../context/ShippingAddressFormikContext';
import useFormSection from '../../../hook/useFormSection';
import useShippingAddrAppContext from '../hooks/useShippingAddressAppContext';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';
import { _cleanObjByKeys, _emptyFunc, _makePromise } from '../../../utils';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import { billingAddressFormInitValues } from '../../billingAddress/utility';
import { __ } from '../../../i18n';
import { isCartAddressValid } from '../../../utils/address';

const initialValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: '',
};

const requiredMessage = __('%1 is required');

const validationSchema = {
  company: YupString().required(requiredMessage),
  firstname: YupString().required(requiredMessage),
  lastname: YupString().required(requiredMessage),
  street: YupArray().test(
    'street1Required',
    requiredMessage,
    value => !!_get(value, 0)
  ),
  phone: YupString().required(requiredMessage),
  zipcode: YupString().required(requiredMessage),
  city: YupString().required(requiredMessage),
  region: YupString().required(requiredMessage),
  country: YupString().required(requiredMessage),
  isSameAsShipping: YupBoolean(),
};

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function ShippingAddressFormikProvider({ children }) {
  const [forceFillFields, setForceFillFields] = useState(false);
  const { setFieldValue } = useFormikContext();
  const { setPageLoader } = useShippingAddrAppContext();
  const {
    cartShippingAddress,
    addCartShippingAddress,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress,
  } = useShippingAddressCartContext();

  const cartHasShippingAddress = isCartAddressValid(cartShippingAddress);

  const formSubmit = useCallback(
    async (formValues, customerAddressId) => {
      try {
        setPageLoader(true);

        const isBillingSame = _get(formValues, isSameAsShippingField);
        const shippingAddressToSave = _get(formValues, SHIPPING_ADDR_FORM);
        let updateBillingAddress = _emptyFunc();
        let updateShippingAddress = _makePromise(
          addCartShippingAddress,
          shippingAddressToSave,
          isBillingSame
        );

        if (customerAddressId) {
          updateShippingAddress = _makePromise(
            setCustomerAddressAsShippingAddress,
            Number(customerAddressId),
            isBillingSame
          );
        }

        if (isBillingSame) {
          if (customerAddressId) {
            updateBillingAddress = _makePromise(
              setCustomerAddressAsBillingAddress,
              Number(customerAddressId),
              isBillingSame
            );
          } else {
            updateBillingAddress = _makePromise(setCartBillingAddress, {
              ...shippingAddressToSave,
              isSameAsShipping: true,
            });
          }
        }

        const [shippingAddrResponse] = await Promise.all([
          updateShippingAddress(),
          updateBillingAddress(),
        ]);

        if (isBillingSame) {
          const addressToSet = _cleanObjByKeys(
            _get(shippingAddrResponse, 'shipping_addresses'),
            ['fullName']
          );
          setFieldValue(BILLING_ADDR_FORM, {
            ...billingAddressFormInitValues,
            ...addressToSet,
          });
        }

        setPageLoader(false);
      } catch (error) {
        console.log({ error });
        setPageLoader(false);
      }
    },
    [
      addCartShippingAddress,
      setCartBillingAddress,
      setPageLoader,
      setCustomerAddressAsShippingAddress,
      setCustomerAddressAsBillingAddress,
      setFieldValue,
    ]
  );

  const resetShippingAddressFormFields = useCallback(() => {
    setFieldValue(SHIPPING_ADDR_FORM, { ...initialValues });
  }, [setFieldValue]);

  const setShippingAddressFormFields = useCallback(
    addressToSet => {
      setFieldValue(SHIPPING_ADDR_FORM, {
        ...initialValues,
        ...addressToSet,
      });
    },
    [setFieldValue]
  );

  // filling shipping address field when the cart possess a shipping address
  useEffect(() => {
    if (forceFillFields || !cartShippingAddress) {
      return _emptyFunc();
    }

    if (!cartHasShippingAddress) {
      return _emptyFunc();
    }

    // needs to do this only once; forceFillFields make sure of it.
    setShippingAddressFormFields(cartShippingAddress);
    setForceFillFields(true);
    return _emptyFunc();
  }, [
    forceFillFields,
    cartShippingAddress,
    cartHasShippingAddress,
    setFieldValue,
    setShippingAddressFormFields,
  ]);

  const context = useFormSection({
    id: SHIPPING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <ShippingAddressFormContext.Provider
      value={{
        ...context,
        resetShippingAddressFormFields,
        setShippingAddressFormFields,
        submitHandler: formSubmit,
      }}
    >
      <Form>{children}</Form>
    </ShippingAddressFormContext.Provider>
  );
}

ShippingAddressFormikProvider.propTypes = {
  children: node.isRequired,
};

export default ShippingAddressFormikProvider;
