import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import {
  string as YupString,
  array as YupArray,
  boolean as YupBoolean,
} from 'yup';

import ShippingAddressFormContext from './ShippingAddressFormContext';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useShippingAddrCartContext from '../../../hook/cart/useShippingAddrCartContext';
import useShippingAddrAppContext from '../../../hook/app/useShippingAddrAppContext';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';
import { _emptyFunc, _makePromise, _toString } from '../../../utils';
import {
  getFirstItemIdFromShippingAddrList,
  isCartHoldingShippingAddress,
  shippingAddressFormInitValues,
  prepareFormAddressFromAddressListById,
  prepareCartAddressWithId,
  saveCustomerAddressToLocalStorage,
} from '../../../utils/address';

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
const shippingAddrRegionField = `${SHIPPING_ADDR_FORM}.region`;
const shippingAddrCountryField = `${SHIPPING_ADDR_FORM}.country`;

function ShippingAddressFormManager({ children }) {
  const [forceOffEditMode, setForceOffEditMode] = useState(false);
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { values, setFieldValue } = useFormikContext();
  const {
    isLoggedIn,
    stateList,
    defaultShippingAddress,
    customerAddressList,
    setPageLoader,
    setSuccessMessage,
    updateCustomerAddress,
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
  } = useShippingAddrCartContext();
  const shippingRegion = _get(values, shippingAddrRegionField);
  const shippingCountry = _get(values, shippingAddrCountryField);
  const stateInfo = _get(stateList, `${shippingCountry}`, []).find(
    s => s.code === shippingRegion
  );
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

        setFormEditMode(false);
        setPageLoader(false);
      } catch (error) {
        console.log({ error });
        setPageLoader(false);
      }
    },
    [
      addCartShippingAddress,
      setCartBillingAddress,
      setFormEditMode,
      setPageLoader,
      setCustomerAddressAsShippingAddress,
      setCustomerAddressAsBillingAddress,
    ]
  );

  const resetShippingAddressFormFields = useCallback(() => {
    setFieldValue(SHIPPING_ADDR_FORM, { ...shippingAddressFormInitValues });
  }, [setFieldValue]);

  const saveAddressHandler = useCallback(
    async formikValues => {
      try {
        let updateCustomerAddrPromise = _emptyFunc();
        const updateCartAddressPromise = _makePromise(formSubmit, formikValues);
        if (
          isLoggedIn &&
          selectedAddressId &&
          selectedAddressId !== 'new' &&
          editMode
        ) {
          updateCustomerAddrPromise = _makePromise(
            updateCustomerAddress,
            selectedAddressId,
            _get(formikValues, SHIPPING_ADDR_FORM, {}),
            stateInfo
          );
        }

        await Promise.all([
          updateCustomerAddrPromise(),
          updateCartAddressPromise(),
        ]);

        setFormEditMode(false);
        setSuccessMessage('Shipping address updated successfully.');
      } catch (error) {
        console.log({ error });
      }
    },
    [
      formSubmit,
      isLoggedIn,
      selectedAddressId,
      editMode,
      updateCustomerAddress,
      setSuccessMessage,
      stateInfo,
      setFormEditMode,
    ]
  );

  /**
   * Setting customer address to the cart address when user opt out the address
   */
  const performCustomerAddressSwitching = useCallback(
    async (addressId, formikValues) => {
      if (isLoggedIn && _toString(addressId) !== _toString(selectedAddressId)) {
        let updateAddressPromise = _emptyFunc();
        const isBillingSame = _get(formikValues, isSameAsShippingField);

        // if address is new, then submit it with formik values; else use customer
        // address id to update the cart address
        if (!editMode) {
          updateAddressPromise = _makePromise(
            formSubmit,
            formikValues,
            addressId
          );

          if (addressId === 'new') {
            updateAddressPromise = _makePromise(formSubmit, formikValues);
          }
        }

        try {
          await Promise.all([updateAddressPromise()]);
          setCartSelectedShippingAddress(_toString(addressId));
          setSuccessMessage('Shipping address updated successfully');

          // need to update local storage values of customer address id opted.
          // because there is no other way to understand the opted customer
          // address id from the cart address details.
          saveCustomerAddressToLocalStorage(addressId, isBillingSame);
        } catch (error) {
          console.log({ error });
        }
      }
    },
    [
      isLoggedIn,
      selectedAddressId,
      editMode,
      formSubmit,
      setSuccessMessage,
      setCartSelectedShippingAddress,
    ]
  );

  useEffect(() => {
    if (cartHasShippingAddress && !forceOffEditMode) {
      setFormEditMode(false);
      setForceOffEditMode(true);
    }
  }, [cartHasShippingAddress, forceOffEditMode, setFormEditMode]);

  // side effect to set the selected shipping address for the intitial time
  // in different occasions
  useEffect(() => {
    let addressId;
    // guest checkout; cart contains an address; then, set address id as selected.
    if (!isLoggedIn && cartHasShippingAddress) {
      addressId = _toString(
        getFirstItemIdFromShippingAddrList(shippingAddressList)
      );
      console.log('1111', addressId);
    }
    // customer checkout; no cart address present; customer has a default shipping
    // address, then, set the default shipping address as selected.
    else if (isLoggedIn && !cartHasShippingAddress && defaultShippingAddress) {
      addressId = _toString(defaultShippingAddress);
      console.log('2222', addressId);
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
      console.log('3333', addressId);
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
        saveAddressHandler,
        performCustomerAddressSwitching,
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
