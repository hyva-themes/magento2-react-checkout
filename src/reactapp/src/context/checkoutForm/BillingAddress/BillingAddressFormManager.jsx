import React, { useEffect, useState } from 'react';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool } from 'yup';
import BillingAddressFormContext from './BillingAddressFormContext';
import { BILLING_ADDR_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';

const initialValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: '',
  phone: '',
  zipcode: '',
  city: '',
  country: '',
  isSameAsShipping: true,
};

const requiredMessage = '%1 is required';

const validationSchema = {
  company: YupString().required(requiredMessage),
  firstname: YupString().required(requiredMessage),
  lastname: YupString().required(requiredMessage),
  street: YupString()
    .required(requiredMessage)
    .test('isNaN', 'Please check input for %1.', value => Number.isNaN(value)),
  phone: YupString().required(requiredMessage),
  zipcode: YupString().required(requiredMessage),
  city: YupString().required(requiredMessage),
  country: YupString().required(requiredMessage),
  isSameAsShipping: YupBool(),
};

function BillingAddressFormManager({ children }) {
  const { values } = useFormikContext();
  const isSame = _get(values, `${BILLING_ADDR_FORM}.isSameAsShipping`);
  const [isBillingShippingSame, setBillingSameAsShipping] = useState(isSame);

  const formSubmit = () => {};

  useEffect(() => {
    setBillingSameAsShipping(isSame);
  }, [isSame]);

  const formContext = useFormSection({
    id: BILLING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  const context = {
    ...formContext,
    isBillingAddressSameAsShipping: isBillingShippingSame,
  };

  return (
    <BillingAddressFormContext.Provider value={context}>
      <Form>{children}</Form>
    </BillingAddressFormContext.Provider>
  );
}

export default BillingAddressFormManager;
