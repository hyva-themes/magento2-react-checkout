import React, { useCallback, useEffect, useState } from 'react';
import {
  array as YupArray,
  string as YupString,
  boolean as YupBoolean,
} from 'yup';
import _get from 'lodash.get';
import { Form } from 'formik';
import { node, object } from 'prop-types';

import { __ } from '../../../i18n';
import { _toString } from '../../../utils';
import { CART_SHIPPING_ADDRESS } from '../utility';
import { SHIPPING_ADDR_FORM } from '../../../config';
import RootElement from '../../../utils/rootElement';
import LocalStorage from '../../../utils/localStorage';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import { isCartAddressValid } from '../../../utils/address';
import { customerHasAddress } from '../../../utils/customer';
import useRegionData from '../../address/hooks/useRegionData';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';
import useRegionValidation from '../../address/hooks/useRegionValidation';
import ShippingAddressFormContext from '../context/ShippingAddressFormikContext';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';

const initialValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: RootElement.getDefaultCountryId(),
};

const requiredMessage = __('%1 is required');

const initValidationSchema = {
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
  region: YupString().nullable(),
  country: YupString().required(requiredMessage),
  isSameAsShipping: YupBoolean(),
};

function ShippingAddressFormikProvider({ children, formikData }) {
  const {
    setFieldValue,
    selectedRegion,
    selectedCountry,
    setFieldTouched,
  } = formikData;
  const addressIdInCache = _toString(
    LocalStorage.getCustomerShippingAddressId()
  );
  const [backupAddress, setBackupAddress] = useState(null);
  const [forceViewMode, setForceViewMode] = useState(false);
  const [forceFilledAddress, setForceFilledAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    addressIdInCache || CART_SHIPPING_ADDRESS
  );
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    !!addressIdInCache
  );
  const validationSchema = useRegionValidation(
    selectedCountry,
    initValidationSchema
  );
  const editModeContext = useFormEditMode();
  const { setFormToViewMode } = editModeContext;
  const { customerAddressList } = useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const regionData = useRegionData(selectedCountry, selectedRegion);
  const cartHasShippingAddress = isCartAddressValid(cartShippingAddress);

  const resetShippingAddressFormFields = useCallback(() => {
    setFieldValue(SHIPPING_ADDR_FORM, { ...initialValues });
    setFieldTouched(SHIPPING_ADDR_FORM, {});
  }, [setFieldValue, setFieldTouched]);

  const setShippingAddressFormFields = useCallback(
    addressToSet => {
      setFieldValue(SHIPPING_ADDR_FORM, {
        ...initialValues,
        ...addressToSet,
      });
    },
    [setFieldValue]
  );

  // filling shipping address field when the cart possess a shipping address
  useEffect(() => {
    if (forceFilledAddress === selectedAddress || !cartHasShippingAddress) {
      return;
    }

    setShippingAddressFormFields({ ...cartShippingAddress });
    setForceFilledAddress(selectedAddress);
  }, [
    selectedAddress,
    forceFilledAddress,
    cartShippingAddress,
    cartHasShippingAddress,
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
    forceViewMode,
    setFormToViewMode,
    customerAddressList,
    cartHasShippingAddress,
  ]);

  let context = {
    ...regionData,
    ...formikData,
    ...editModeContext,
    formikData,
    backupAddress,
    selectedAddress,
    setBackupAddress,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
    resetShippingAddressFormFields,
  };

  const formSubmit = useSaveAddressAction(context);

  const handleKeyDown = useEnterActionInForm({
    formikData,
    validationSchema,
    submitHandler: formSubmit,
  });

  const formSectionContext = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: SHIPPING_ADDR_FORM,
    submitHandler: formSubmit,
  });

  context = {
    ...context,
    ...formikData,
    ...formSectionContext,
    formikData,
    formSubmit,
    handleKeyDown,
  };

  return (
    <ShippingAddressFormContext.Provider value={context}>
      <Form id={SHIPPING_ADDR_FORM}>{children}</Form>
    </ShippingAddressFormContext.Provider>
  );
}

ShippingAddressFormikProvider.propTypes = {
  children: node.isRequired,
  formikData: object.isRequired,
};

export default ShippingAddressFormikProvider;
