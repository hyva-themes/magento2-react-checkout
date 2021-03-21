import React, { useCallback, useEffect, useMemo } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import BillingAddressFormContext from './BillingAddressFormContext';
import { BILLING_ADDR_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useBillingAddrCartContext from '../../../hook/cart/useBillingAddrCartContext';
import { isCartBillingAddressValid } from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';
import { _isObjEmpty, _keys } from '../../../utils';
import useBillingAddrAppContext from '../../../hook/app/useBillingAddrAppContext';

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
  const {
    isLoggedIn,
    customerAddressList,
    setPageLoader,
  } = useBillingAddrAppContext();
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

  const addressContext = useMemo(() => {
    if (!isLoggedIn && !cartBillingAddress) {
      return { selectedAddressId: null, addressList: {} };
    }

    // possible to have only cart billing address in the list
    if (!isLoggedIn) {
      return { selectedAddressId: 'new', addressList: { cartBillingAddress } };
    }

    const billingAddrInCache = LocalStorage.getCustomerShippingAddressId();

    // logged-in case; there is billing address entry in local storage;
    // so that means the selected billing address is any one of the customer
    // address available. so passing customer addresses as the addressList
    if (
      billingAddrInCache &&
      !_isObjEmpty(customerAddressList) &&
      _keys(customerAddressList).includes(billingAddrInCache)
    ) {
      return {
        selectedAddressId: billingAddrInCache,
        addressList: { ...customerAddressList },
      };
    }

    // logged-in default case; cart billing address (if any) is not
    // any one of the customer addresses (if any). So passing both as address
    // items;
    return {
      selectedAddressId: 'new',
      addressList: {
        new: cartBillingAddress || {},
        ...customerAddressList,
      },
    };
  }, [isLoggedIn, cartBillingAddress, customerAddressList]);

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
    ...addressContext,
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
