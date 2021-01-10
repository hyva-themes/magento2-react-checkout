import React, { useCallback, useEffect, useMemo } from 'react';
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
  const {
    shippingAddressIds,
    shippingAddressList,
    addCartShippingAddress,
    setCartBillingAddress,
    setCartSelectedShippingAddress,
  } = useCartContext();

  const {
    addressId: selectedAddressId,
    address: selectedShippingAddress,
  } = useMemo(() => {
    const addressId = _get(shippingAddressIds, 0);
    const address = _get(shippingAddressList, addressId);
    return {
      addressId,
      address,
    };
  }, [shippingAddressIds, shippingAddressList]);

  // for guest cart, we are setting the first shipping address as the selected
  // shipping adddress here;
  useEffect(() => {
    if (selectedAddressId) {
      setCartSelectedShippingAddress(selectedAddressId);
    }
  }, [selectedAddressId, setCartSelectedShippingAddress]);

  // populating shipping address with selected shipping address value and then
  // turn of edit mode
  useEffect(() => {
    if (selectedShippingAddress) {
      setFieldValue('shipping_address', selectedShippingAddress);
      setFormEditMode(false);
    }
  }, [selectedShippingAddress, setFieldValue, setFormEditMode]);

  const formSubmit = useCallback(
    async formValues => {
      setPageLoader(true);

      await addCartShippingAddress(shippingAddrFieldValues);

      const isBillingSame = _get(
        formValues,
        'billing_address.isSameAsShipping'
      );

      if (isBillingSame) {
        await setCartBillingAddress({
          ...shippingAddrFieldValues,
          isSameAsShipping: true,
        });
      }

      setFormEditMode(false);
      setPageLoader(false);
    },
    [
      shippingAddrFieldValues,
      addCartShippingAddress,
      setCartBillingAddress,
      setFormEditMode,
      setPageLoader,
    ]
  );

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
