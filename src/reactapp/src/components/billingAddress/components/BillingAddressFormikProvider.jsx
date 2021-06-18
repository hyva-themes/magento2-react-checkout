import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import BillingAddressFormContext from '../context/BillingAddressFormikContext';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import { isCartAddressValid } from '../../../utils/address';
import {
  GUEST_CART_NEW_ADDRESS,
  MY_CART_NEW_ADDRESS,
  billingAddressFormInitValues,
  prepareFormAddressFromAddressListById,
  prepareFormAddressFromCartAddress,
  CART_BILLING_ADDRESS,
} from '../utility';
import { __ } from '../../../i18n';
import { BILLING_ADDR_FORM } from '../../../config';
import { _isObjEmpty, _keys, _toString } from '../../../utils';
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

const requiredMessage = __('%1 is required');

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

const initialAddressIdInCache = !!_toString(
  LocalStorage.getCustomerBillingAddressId()
);

const regionField = `${BILLING_ADDR_FORM}.region`;
const countryField = `${BILLING_ADDR_FORM}.country`;
const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function BillingAddressFormManager({ children }) {
  const addressIdInCache = _toString(
    LocalStorage.getCustomerBillingAddressId()
  );
  const [backupAddress, setBackupAddress] = useState(null);
  const [regionData, setRegionData] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(
    addressIdInCache || CART_BILLING_ADDRESS
  );
  const [addressInUsage, setAddressInUsage] = useState(null);
  const [addressPopulated, setAddressPopulated] = useState(null);
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    initialAddressIdInCache
  );
  const { values, setFieldValue } = useFormikContext();
  const { stateList } = useBillingAddressAppContext();
  const editModeContext = useFormEditMode();
  const {
    isLoggedIn,
    customerAddressList,
    setPageLoader,
  } = useBillingAddressAppContext();
  const {
    selectedAddressId,
    cartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useBillingAddressCartContext();
  const regionValue = _get(values, regionField);
  const countryValue = _get(values, countryField);
  const isSame = _get(values, isSameAsShippingField);
  const { setFormEditMode } = editModeContext;
  const selectedCustomerAddress = prepareFormAddressFromAddressListById(
    customerAddressList,
    selectedAddressId
  );

  const updateCustomerAddressAsCartAddress = useCallback(
    async customerAddressId => {
      try {
        const isShippingSame = LocalStorage.getBillingSameAsShippingInfo();

        LocalStorage.saveCustomerBillingAddressId(customerAddressId);

        setPageLoader(true);
        await setCustomerAddressAsBillingAddress(
          customerAddressId,
          isShippingSame
        );
        setFormEditMode(false);
        setPageLoader(false);
      } catch (error) {
        console.error(error);
        setPageLoader(false);
      }
    },
    [setPageLoader, setCustomerAddressAsBillingAddress, setFormEditMode]
  );

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

  const setBillingAddressFormFields = useCallback(
    addressToSet => {
      setFieldValue(BILLING_ADDR_FORM, {
        ...billingAddressFormInitValues,
        ...addressToSet,
        isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
      });
    },
    [setFieldValue]
  );

  const mapCartBillingAddressToBillingForm = useCallback(() => {
    if (isCartAddressValid(cartBillingAddress)) {
      setFieldValue(BILLING_ADDR_FORM, {
        ...cartBillingAddress,
        isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
      });
    }
  }, [cartBillingAddress, setFieldValue]);

  // determines billing address needs to be populated into form
  useEffect(() => {
    if (
      !isLoggedIn &&
      isCartAddressValid(cartBillingAddress) &&
      addressInUsage !== GUEST_CART_NEW_ADDRESS
    ) {
      setAddressInUsage(GUEST_CART_NEW_ADDRESS);
    } else if (
      isLoggedIn &&
      !selectedAddressId &&
      isCartAddressValid(cartBillingAddress) &&
      addressInUsage !== MY_CART_NEW_ADDRESS
    ) {
      setAddressInUsage(MY_CART_NEW_ADDRESS);
    } else if (
      isLoggedIn &&
      selectedAddressId &&
      addressInUsage !== selectedAddressId
    ) {
      setAddressInUsage(selectedAddressId);
    }
  }, [isLoggedIn, addressInUsage, selectedAddressId, cartBillingAddress]);

  // populating the form based on the billing address determined to be used.
  useEffect(() => {
    if (addressPopulated !== addressInUsage) {
      let canPopulate = false;
      const isSameAsShipping = LocalStorage.getBillingSameAsShippingInfo();
      if (
        [GUEST_CART_NEW_ADDRESS, MY_CART_NEW_ADDRESS].includes(addressInUsage)
      ) {
        canPopulate = true;
        setFieldValue(BILLING_ADDR_FORM, {
          ...prepareFormAddressFromCartAddress(cartBillingAddress),
          isSameAsShipping,
        });
      } else if (
        addressInUsage === selectedAddressId &&
        isCartAddressValid(selectedCustomerAddress)
      ) {
        canPopulate = true;
        setFieldValue(BILLING_ADDR_FORM, {
          ...selectedCustomerAddress,
          isSameAsShipping,
        });
      }

      if (canPopulate) {
        setAddressPopulated(addressInUsage);

        if (isSameAsShipping) {
          setFormEditMode(true);
        } else {
          setFormEditMode(false);
        }
      }
    }
  }, [
    addressInUsage,
    addressPopulated,
    cartBillingAddress,
    selectedAddressId,
    selectedCustomerAddress,
    isSame,
    setFieldValue,
    setFormEditMode,
    setAddressPopulated,
  ]);

  useEffect(() => {
    setSelectedAddress(addressIdInCache);
  }, [addressIdInCache]);

  // whenever state value changed, we will find the state entry from the stateList
  // state info needed in multiple occasions. it is useful to store this data separate
  useEffect(() => {
    if (
      _get(regionData, 'code') !== regionValue &&
      regionValue &&
      countryValue &&
      stateList
    ) {
      const region = _get(stateList, countryValue, []).find(
        state => state.code === regionValue
      );
      setRegionData(region);
    }
  }, [regionValue, countryValue, regionData, stateList]);

  const addressContext = useMemo(() => {
    if (!isLoggedIn && !cartBillingAddress) {
      return { selectedAddressId: null, addressList: {} };
    }

    // possible to have only cart billing address in the list
    if (!isLoggedIn) {
      return { selectedAddressId: 'new', addressList: { cartBillingAddress } };
    }

    const billingAddrInCache = LocalStorage.getCustomerBillingAddressId();

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

  let context = {
    ...addressContext,
    ...editModeContext,
    selectedAddress,
    regionData,
    backupAddress,
    customerAddressSelected,
    selectedBillingAddressId: addressInUsage,
    isBillingAddressSameAsShipping: isSame,
    setSelectedAddress,
    setBackupAddress,
    setCustomerAddressSelected,
    resetBillingAddressFormFields,
    toggleBillingEqualsShippingState,
    mapCartBillingAddressToBillingForm,
    updateCustomerAddressAsCartAddress,
    setBillingAddressFormFields,
  };

  const formSubmit = useSaveAddressAction(context);
  const handleKeyDown = useEnterActionInForm({
    validationSchema,
    submitHandler: formSubmit,
    formId: BILLING_ADDR_FORM,
  });

  const formContext = useFormSection({
    id: BILLING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  context = { ...context, ...formContext, handleKeyDown };

  return (
    <BillingAddressFormContext.Provider value={context}>
      <Form id={BILLING_ADDR_FORM}>{children}</Form>
    </BillingAddressFormContext.Provider>
  );
}

BillingAddressFormManager.propTypes = {
  children: node.isRequired,
};

export default BillingAddressFormManager;
