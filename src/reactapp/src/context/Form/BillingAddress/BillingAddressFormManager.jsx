import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import BillingAddressFormContext from './BillingAddressFormContext';
import { BILLING_ADDR_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useAppContext from '../../../hook/useAppContext';
import useCartContext from '../../../hook/useCartContext';
import useFormEditMode from '../../../hook/useFormEditMode';

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
  isSameAsShipping: true,
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

function BillingAddressFormManager({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const [, { setPageLoader }] = useAppContext();
  const { cartBillingAddress, setCartBillingAddress } = useCartContext();
  const { values, setFieldValue } = useFormikContext();
  const isSame = _get(values, `${BILLING_ADDR_FORM}.isSameAsShipping`);
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

  useEffect(() => {
    if (
      cartBillingAddress &&
      cartBillingAddress.firstname &&
      cartBillingAddress.country
    ) {
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

  const context = {
    ...formContext,
    isBillingAddressSameAsShipping: isSame,
  };

  return (
    <BillingAddressFormContext.Provider
      value={{ ...context, editMode, setFormToEditMode }}
    >
      <Form>{children}</Form>
    </BillingAddressFormContext.Provider>
  );
}

BillingAddressFormManager.propTypes = {
  children: node.isRequired,
};

export default BillingAddressFormManager;
