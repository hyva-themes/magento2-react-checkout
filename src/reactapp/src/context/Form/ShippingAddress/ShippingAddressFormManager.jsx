import React, { useCallback, useEffect, useMemo } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import {
  string as YupString,
  array as YupArray,
  boolean as YupBoolean,
} from 'yup';

import ShippingAddressFormContext from './ShippingAddressFormContext';
import { SHIPPING_ADDR_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useShippingAddrCartContext from '../../../hook/cart/useShippingAddrCartContext';
import useShippingAddrAppContext from '../../../hook/cart/useShippingAddrAppContext';
import {
  getFirstItemFromShippingAddrList,
  getFirstItemIdFromShippingAddrList,
  isCartHoldingShippingAddress,
} from '../../../utils/address';

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
  selectedAddress: 'new',
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
  isSameAsShipping: YupBoolean(),
};

function ShippingAddressFormManager({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { values, setFieldValue } = useFormikContext();
  const shippingAddrFieldValues = _get(values, SHIPPING_ADDR_FORM);
  const {
    isLoggedIn,
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
  } = useShippingAddrAppContext();
  const {
    cartInfo,
    shippingAddressList,
    selectedAddressId,
    addCartShippingAddress,
    setCartBillingAddress,
    setCartSelectedShippingAddress,
  } = useShippingAddrCartContext();

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

  // side effect to set the selected shipping address for the intitial time
  // in different occasions
  useEffect(() => {
    const cartContainsShippingAddr = isCartHoldingShippingAddress(cartInfo);

    // guest checkout; cart contains an address; then, set address id as selected.
    if (!isLoggedIn && cartContainsShippingAddr) {
      const firstAddressId = getFirstItemIdFromShippingAddrList(
        shippingAddressList
      );
      setCartSelectedShippingAddress(firstAddressId);
    }

    // customer checkout; no cart address present; customer has a default shipping
    // address, then, set the default shipping address as selected.
    if (isLoggedIn && !cartContainsShippingAddr && defaultShippingAddress) {
      setCartSelectedShippingAddress(defaultShippingAddress);
    }

    // customer checkout; cart contains an address; so the cart address is a new
    // address; hence set it to "new"
    if (isLoggedIn && cartContainsShippingAddr) {
      setCartSelectedShippingAddress('new');
    }
  }, [
    cartInfo,
    isLoggedIn,
    shippingAddressList,
    defaultShippingAddress,
    setCartSelectedShippingAddress,
  ]);

  // side effect setting shipping_address fields in different occasions.
  useEffect(() => {
    // guest checkout; cart contains an address; then, set formik fields
    // with cart address
    if (!isLoggedIn && selectedAddressId) {
      setFieldValue(SHIPPING_ADDR_FORM, {
        ...initialValues,
        ..._get(shippingAddressList, selectedAddressId, {}),
        selectedAddress: selectedAddressId,
      });
      setFormEditMode(false);
    }

    // customer checkout; cart contains an address; if the cart address is "new",
    // then use cart address itself to fill out the formik fields.
    // if cart address is not "new", then the address must be any of the customer
    // address; so pick that address and fill out the formik fields.
    if (isLoggedIn && selectedAddressId) {
      if (selectedAddressId === 'new') {
        setFieldValue(SHIPPING_ADDR_FORM, {
          ...initialValues,
          ...getFirstItemFromShippingAddrList(shippingAddressList),
          selectedAddress: selectedAddressId,
        });
      } else {
        setFieldValue(SHIPPING_ADDR_FORM, {
          ...initialValues,
          ..._get(customerAddressList, selectedAddressId, {}),
          selectedAddress: selectedAddressId,
        });
      }
      setFormEditMode(false);
    }
  }, [
    isLoggedIn,
    selectedAddressId,
    shippingAddressList,
    customerAddressList,
    setFieldValue,
    setFormEditMode,
  ]);

  const addressList = useMemo(() => {
    if (!isLoggedIn && !selectedAddressId) {
      return {};
    }

    if (!isLoggedIn && selectedAddressId) {
      return {
        [selectedAddressId]: {
          id: selectedAddressId,
          ...getFirstItemFromShippingAddrList(shippingAddressList),
        },
      };
    }

    if (isLoggedIn && selectedAddressId === 'new') {
      return {
        new: {
          id: 'new',
          ...getFirstItemFromShippingAddrList(shippingAddressList),
        },
        ...customerAddressList,
      };
    }

    return { ...customerAddressList };
  }, [isLoggedIn, selectedAddressId, shippingAddressList, customerAddressList]);

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
        editMode,
        addressList,
        setFormToEditMode,
      }}
    >
      <Form>{children}</Form>
    </ShippingAddressFormContext.Provider>
  );
}

ShippingAddressFormManager.propTypes = {
  children: node.isRequired,
};

export default ShippingAddressFormManager;
