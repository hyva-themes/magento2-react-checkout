import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, array as YupArray } from 'yup';
import ShippingAddressFormContext from './ShippingAddressFormContext';
import { SHIPPING_ADDR_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useCartContext from '../../../hook/useCartContext';
import useFormEditMode from '../../../hook/useFormEditMode';
import useAppContext from '../../../hook/useAppContext';

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
};

function ShippingAddressFormManager({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { values, setFieldValue } = useFormikContext();
  const shippingAddrFieldValues = _get(values, 'shipping_address');
  const [, { setPageLoader }] = useAppContext();

  const [
    cartData,
    { addCartShippingAddress, setCartBillingAddress },
  ] = useCartContext();
  const cartShippingAddr = _get(cartData, 'cart.shipping_addresses[0]');

  const formSubmit = useCallback(async () => {
    setPageLoader(true);

    await addCartShippingAddress(shippingAddrFieldValues);

    const isBillingSame = _get(values, 'billing_address.isSameAsShipping');

    if (isBillingSame) {
      await setCartBillingAddress({
        ...shippingAddrFieldValues,
        isSameAsShipping: true,
      });
    }

    setFormEditMode(false);
    setPageLoader(false);
  }, [
    shippingAddrFieldValues,
    addCartShippingAddress,
    setCartBillingAddress,
    setFormEditMode,
  ]);

  useEffect(() => {
    if (cartShippingAddr) {
      setFieldValue('shipping_address', cartShippingAddr);
      setFormEditMode(false);
    }
  }, [cartShippingAddr, setFieldValue, setFormEditMode]);

  const context = useFormSection({
    id: SHIPPING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <ShippingAddressFormContext.Provider
      value={{ ...context, editMode, setFormToEditMode }}
    >
      <Form>{children}</Form>
    </ShippingAddressFormContext.Provider>
  );
}

ShippingAddressFormManager.propTypes = {
  children: node.isRequired,
};

export default ShippingAddressFormManager;
