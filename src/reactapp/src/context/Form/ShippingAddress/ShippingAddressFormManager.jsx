import React from 'react';
import { Form } from 'formik';
import { string as YupString } from 'yup';
import ShippingAddressFormContext from './ShippingAddressFormContext';
import { SHIPPING_ADDR_FORM } from '../../../config';
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
};

const requiredMessage = '%1 is required';

const validationSchema = {
  company: YupString().required(requiredMessage),
  firstname: YupString().required(requiredMessage),
  lastname: YupString().required(requiredMessage),
  street: YupString().required(requiredMessage),
  phone: YupString().required(requiredMessage),
  zipcode: YupString().required(requiredMessage),
  city: YupString().required(requiredMessage),
  country: YupString().required(requiredMessage),
};

function ShippingAddressFormManager({ children }) {
  const formSubmit = () => {};
  const context = useFormSection({
    id: SHIPPING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });
  return (
    <ShippingAddressFormContext.Provider value={context}>
      <Form>{children}</Form>
    </ShippingAddressFormContext.Provider>
  );
}

export default ShippingAddressFormManager;
