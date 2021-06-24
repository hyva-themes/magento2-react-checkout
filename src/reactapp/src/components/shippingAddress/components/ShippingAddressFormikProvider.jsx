import React, { useCallback, useEffect, useState } from 'react';
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
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import { __ } from '../../../i18n';
import { isCartAddressValid } from '../../../utils/address';
import { SHIPPING_ADDR_FORM } from '../../../config';
import { _emptyFunc, _toString } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { CART_SHIPPING_ADDRESS } from '../utility';
import { customerHasAddress } from '../../../utils/customer';
import useCountryState from '../../address/hooks/useCountryState';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

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

const requiredMessage = __('%1 is required');

const validationSchema = {
  company: YupString().required(requiredMessage),
  firstname: YupString().required(requiredMessage),
  lastname: YupString().required(requiredMessage),
  street: YupArray().test(
    'street1Required',
    requiredMessage,
    (value) => !!_get(value, 0)
  ),
  phone: YupString().required(requiredMessage),
  zipcode: YupString().required(requiredMessage),
  city: YupString().required(requiredMessage),
  region: YupString().required(requiredMessage).nullable(),
  country: YupString().required(requiredMessage),
  isSameAsShipping: YupBoolean(),
};

const toggleRegionRequiredSchema = (regionRequired) => {
  if (!regionRequired && validationSchema.region) {
    validationSchema.region = YupString().nullable();
  } else {
    validationSchema.region = YupString().required(requiredMessage).nullable();
  }
};

const regionField = `${SHIPPING_ADDR_FORM}.region`;
const countryField = `${SHIPPING_ADDR_FORM}.country`;

function ShippingAddressFormikProvider({ children }) {
  const addressIdInCache = _toString(
    LocalStorage.getCustomerShippingAddressId()
  );
  const [forceFillFields, setForceFillFields] = useState(false);
  const [forceViewMode, setForceViewMode] = useState(false);
  const [backupAddress, setBackupAddress] = useState(null);
  const [regionData, setRegionData] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(
    addressIdInCache || CART_SHIPPING_ADDRESS
  );
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    !!addressIdInCache
  );
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const {
    stateList,
    countryList,
    customerAddressList,
  } = useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const editModeContext = useFormEditMode();
  const cartHasShippingAddress = isCartAddressValid(cartShippingAddress);
  const regionValue = _get(values, regionField);
  const countryValue = _get(values, countryField);
  const { setFormToViewMode } = editModeContext;

  const resetShippingAddressFormFields = useCallback(() => {
    setFieldValue(SHIPPING_ADDR_FORM, { ...initialValues });
    setFieldTouched(SHIPPING_ADDR_FORM, {});
  }, [setFieldValue, setFieldTouched]);

  const setShippingAddressFormFields = useCallback(
    (addressToSet) => {
      setFieldValue(SHIPPING_ADDR_FORM, {
        ...initialValues,
        ...addressToSet,
      });
    },
    [setFieldValue]
  );

  // filling shipping address field when the cart possess a shipping address
  useEffect(() => {
    if (forceFillFields || !cartShippingAddress) {
      return _emptyFunc();
    }

    if (!cartHasShippingAddress) {
      return _emptyFunc();
    }

    // needs to do this only once; forceFillFields make sure of it.
    setShippingAddressFormFields(cartShippingAddress);
    setForceFillFields(true);
    return _emptyFunc();
  }, [
    forceFillFields,
    cartShippingAddress,
    cartHasShippingAddress,
    setFieldValue,
    setShippingAddressFormFields,
  ]);

  // when user sign-in, if the cart has shipping address, then we need to
  // turn off edit mode of the address section
  useEffect(() => {
    if (
      !forceViewMode &&
      (cartHasShippingAddress || customerHasAddress(customerAddressList))
    ) {
      // this needs to be executed once. to make sure that we are using
      // forceViewMode state
      setFormToViewMode();
      setForceViewMode(true);
    }
  }, [
    cartHasShippingAddress,
    customerAddressList,
    setFormToViewMode,
    forceViewMode,
  ]);

  // whenever country value changed, we will find the country entry from the countryList
  // so that we can toggle the validation on the `region` field
  useEffect(() => {
    if (countryList && countryValue) {
      const regionRequired = !!countryList.find(
        (country) => country.id === countryValue
      )?.state_required;

      toggleRegionRequiredSchema(regionRequired);
    }
  }, [countryValue, countryList]);

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
        (state) => state.code === regionValue
      );
      setRegionData(region);
    }
  }, [regionValue, countryValue, regionData, stateList]);

  let context = {
    ...editModeContext,
    resetShippingAddressFormFields,
    setShippingAddressFormFields,
    selectedAddress,
    setSelectedAddress,
    regionData,
    backupAddress,
    setBackupAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
  };

  const formSubmit = useSaveAddressAction(context);

  const handleKeyDown = useEnterActionInForm({
    validationSchema,
    submitHandler: formSubmit,
    formId: SHIPPING_ADDR_FORM,
  });

  const formSectionContext = useFormSection({
    id: SHIPPING_ADDR_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  context = { ...context, ...formSectionContext, formSubmit, handleKeyDown };

  return (
    <ShippingAddressFormContext.Provider value={context}>
      <Form id={SHIPPING_ADDR_FORM}>{children}</Form>
    </ShippingAddressFormContext.Provider>
  );
}

ShippingAddressFormikProvider.propTypes = {
  children: node.isRequired,
};

export default ShippingAddressFormikProvider;
