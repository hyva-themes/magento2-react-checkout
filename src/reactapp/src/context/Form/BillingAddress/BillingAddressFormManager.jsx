import React, { useCallback, useEffect, useMemo } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import BillingAddressFormContext from './BillingAddressFormContext';
import { BILLING_ADDR_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useAppContext from '../../../hook/useAppContext';
import useFormEditMode from '../../../hook/useFormEditMode';
import useBillingAddrCartContext from '../../../hook/cart/useBillingAddrCartContext';
import { isCartBillingAddressValid } from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';

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
  isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
};

const requiredMessage = '%1 is required';

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
  isSameAsShipping: YupBool(),
};

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function BillingAddressFormManager({ children }) {
  const { values, setFieldValue } = useFormikContext();
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const [, { setPageLoader }] = useAppContext();
  const {
    cartBillingAddress,
    setCartBillingAddress,
  } = useBillingAddrCartContext();
  const isSame = _get(values, isSameAsShippingField);
  const billingAddrFieldValues = _get(values, BILLING_ADDR_FORM);

  const formSubmit = useCallback(async () => {
    setPageLoader(true);
    await setCartBillingAddress(billingAddrFieldValues);
    setFormEditMode(false);
    setPageLoader(false);
  }, [
    billingAddrFieldValues,
    setPageLoader,
    setCartBillingAddress,
    setFormEditMode,
  ]);

  const toggleBillingEqualsShippingState = useCallback(() => {
    setFieldValue(isSameAsShippingField, !isSame);
    LocalStorage.saveBillingSameAsShipping(!isSame);
  }, [isSame, setFieldValue]);

  const resetBillingAddressFormFields = useCallback(() => {
    setFieldValue(BILLING_ADDR_FORM, {
      ...initialValues,
      isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
    });
  }, [setFieldValue]);

  const mapCartBillingAddressToBillingForm = useCallback(() => {
    if (isCartBillingAddressValid(cartBillingAddress)) {
      setFieldValue(BILLING_ADDR_FORM, {
        ...cartBillingAddress,
        isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
      });
    }
  }, [cartBillingAddress, setFieldValue]);

  useEffect(() => {
    if (isCartBillingAddressValid(cartBillingAddress)) {
      setFieldValue(BILLING_ADDR_FORM, cartBillingAddress);
      setFormEditMode(false);
    }
  }, [cartBillingAddress, setFieldValue, setFormEditMode]);

  const formContext = useFormSection({
    id: BILLING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  const actionsContext = useMemo(
    () => ({
      resetBillingAddressFormFields,
      toggleBillingEqualsShippingState,
      mapCartBillingAddressToBillingForm,
    }),
    [
      resetBillingAddressFormFields,
      toggleBillingEqualsShippingState,
      mapCartBillingAddressToBillingForm,
    ]
  );

  const editContext = useMemo(
    () => ({
      editMode,
      setFormToEditMode,
      setFormEditMode,
    }),
    [editMode, setFormToEditMode, setFormEditMode]
  );

  const context = {
    ...formContext,
    ...actionsContext,
    ...editContext,
    isBillingAddressSameAsShipping: isSame,
  };

  return (
    <BillingAddressFormContext.Provider value={{ ...context }}>
      <Form>{children}</Form>
    </BillingAddressFormContext.Provider>
  );
}

BillingAddressFormManager.propTypes = {
  children: node.isRequired,
};

export default BillingAddressFormManager;
