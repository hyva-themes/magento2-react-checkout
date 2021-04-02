import React, { useCallback, useEffect, useMemo } from 'react';
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
import useFormEditMode from '../../../hook/useFormEditMode';
import useShippingAddrAppContext from '../../../hook/app/useShippingAddrAppContext';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';
import { _emptyFunc, _makePromise, _toString } from '../../../utils';
import {
  getFirstItemIdFromShippingAddrList,
  isCartHoldingShippingAddress,
  shippingAddressFormInitValues,
  prepareFormAddressFromAddressListById,
  prepareCartAddressWithId,
} from '../utility';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';

export const initialValues = {
  ...shippingAddressFormInitValues,
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

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function ShippingAddressFormikProvider({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { setFieldValue } = useFormikContext();
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
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress,
  } = useShippingAddressCartContext();

  const cartHasShippingAddress = isCartHoldingShippingAddress(cartInfo);

  const formSubmit = useCallback(
    async (formValues, customerAddressId) => {
      try {
        setPageLoader(true);

        const shippingAddressToSave = _get(formValues, SHIPPING_ADDR_FORM);
        let updateBillingAddress = _emptyFunc();
        let updateShippingAddress = _makePromise(
          addCartShippingAddress,
          shippingAddressToSave
        );

        if (customerAddressId) {
          updateShippingAddress = _makePromise(
            setCustomerAddressAsShippingAddress,
            customerAddressId
          );
        }

        const isBillingSame = _get(formValues, isSameAsShippingField);

        if (isBillingSame) {
          if (customerAddressId) {
            updateBillingAddress = _makePromise(
              setCustomerAddressAsBillingAddress,
              customerAddressId,
              isBillingSame
            );
          } else {
            updateBillingAddress = _makePromise(setCartBillingAddress, {
              ...shippingAddressToSave,
              isSameAsShipping: true,
            });
          }
        }

        await Promise.all([updateShippingAddress(), updateBillingAddress()]);

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
    ]
  );

  const resetShippingAddressFormFields = useCallback(() => {
    setFieldValue(SHIPPING_ADDR_FORM, { ...shippingAddressFormInitValues });
  }, [setFieldValue]);

  // side effect to set the selected shipping address for the intitial time
  // in different occasions
  useEffect(() => {
    let addressId;
    // guest checkout; cart contains an address; then, set address id as selected.
    if (!isLoggedIn && cartHasShippingAddress) {
      addressId = _toString(
        getFirstItemIdFromShippingAddrList(shippingAddressList)
      );
    }
    // customer checkout; no cart address present; customer has a default shipping
    // address, then, set the default shipping address as selected.
    else if (isLoggedIn && !cartHasShippingAddress && defaultShippingAddress) {
      addressId = _toString(defaultShippingAddress);
    }
    // customer checkout; cart contains an address; so the cart address is a new
    // address; hence set it to "new"
    else if (
      isLoggedIn &&
      cartHasShippingAddress &&
      !selectedAddressId &&
      !editMode
    ) {
      addressId = 'new';
    }

    if (addressId && addressId !== selectedAddressId) {
      setCartSelectedShippingAddress(addressId);
    }
  }, [
    editMode,
    cartHasShippingAddress,
    isLoggedIn,
    selectedAddressId,
    shippingAddressList,
    defaultShippingAddress,
    setCartSelectedShippingAddress,
  ]);

  // side effect setting shipping_address fields in different occasions.
  useEffect(() => {
    let newAddress;
    const isNewAddress = selectedAddressId === 'new';
    // guest checkout; cart contains an address; then, set formik fields
    // with cart address.
    // customer checkout; cart contains an address; if the cart address is "new",
    // then use cart address itself to fill out the formik fields.
    if ((!isLoggedIn && selectedAddressId) || (isLoggedIn && isNewAddress)) {
      newAddress = prepareFormAddressFromAddressListById(
        shippingAddressList,
        selectedAddressId
      );
    }
    // customer checkout; cart contains an address;if cart address is not "new",
    // then the address must be any of the customer address;
    // so pick that address and fill out the formik fields.
    if (isLoggedIn && selectedAddressId && !isNewAddress) {
      newAddress = prepareFormAddressFromAddressListById(
        customerAddressList,
        selectedAddressId
      );
    }

    if (newAddress) {
      setFieldValue(SHIPPING_ADDR_FORM, newAddress);
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
      return prepareCartAddressWithId(shippingAddressList, selectedAddressId);
    }

    if (isLoggedIn && selectedAddressId === 'new') {
      return {
        ...prepareCartAddressWithId(shippingAddressList, selectedAddressId),
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
        setFormEditMode,
        resetShippingAddressFormFields,
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
