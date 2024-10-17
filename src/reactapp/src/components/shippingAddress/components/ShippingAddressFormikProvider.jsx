import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';

import {
  initialCountry,
  isCartAddressValid,
  CART_SHIPPING_ADDRESS,
  isValidCustomerAddressId,
  addressInitialValidationSchema,
} from '../../../utils/address';
import {
  useShippingAddressAppContext,
  useShippingAddressCartContext,
  usePlaceOrderShippingSaveAction,
} from '../hooks';
import { _toString } from '../../../utils';
import { SHIPPING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import useFormSection from '../../../hook/useFormSection';
import { formikDataShape } from '../../../utils/propTypes';
import useFormEditMode from '../../../hook/useFormEditMode';
import { customerHasAddress } from '../../../utils/customer';
import useRegionData from '../../address/hooks/useRegionData';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';
import useFillDefaultAddresses from '../hooks/useFillDefaultAddresses';
import useRegionValidation from '../../address/hooks/useRegionValidation';
import useCheckoutFormContext from '../../../hook/useCheckoutFormContext';
import ShippingAddressFormContext from '../context/ShippingAddressFormikContext';

const defaultValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country_id: initialCountry,
  saveInBook: false,
};

const initialValidationSchema = {
  ...addressInitialValidationSchema,
  // Here you can add your initial validation schema modifications
};

const addressIdInCache = _toString(LocalStorage.getCustomerShippingAddressId());
const initAddressId = addressIdInCache || CART_SHIPPING_ADDRESS;

function ShippingAddressFormikProvider({ children, formikData }) {
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { setFieldValue, selectedRegion, selectedCountry, setFieldTouched } =
    formikData;
  const [isNewAddress, setIsNewAddress] = useState(true);
  const [backupAddress, setBackupAddress] = useState(null);
  const [forceFilledAddress, setForceFilledAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(initAddressId);
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    isValidCustomerAddressId(addressIdInCache)
  );
  const validationSchema = useRegionValidation(
    selectedCountry,
    initialValidationSchema
  );
  // this will set default addresses on the address fields on login
  useFillDefaultAddresses({
    ...formikData,
    setSelectedAddress,
    setCustomerAddressSelected,
  });
  const editModeContext = useFormEditMode();
  const { customerAddressList } = useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const beforePlaceOrderAction = usePlaceOrderShippingSaveAction();
  const { aggregatedData, registerBeforePlaceOrderAction } =
    useCheckoutFormContext();

  const { setFormToViewMode } = editModeContext;
  const regionData = useRegionData(selectedCountry, selectedRegion);
  const cartHasShippingAddress = isCartAddressValid(cartShippingAddress);

  const resetShippingAddressFormFields = useCallback(() => {
    setFieldValue(SHIPPING_ADDR_FORM, { ...defaultValues });
    setFieldTouched(SHIPPING_ADDR_FORM, {});
  }, [setFieldValue, setFieldTouched]);

  const setShippingAddressFormFields = useCallback(
    (addressToSet) =>
      setFieldValue(SHIPPING_ADDR_FORM, {
        ...defaultValues,
        ...addressToSet,
      }),
    [setFieldValue]
  );

  // Update initialvalues based on the initial cart data fetch.
  useEffect(() => {
    if (aggregatedData) {
      const shippingAddress = aggregatedData?.cart?.shipping_address || {};
      const saveInBook = !!aggregatedData?.customer?.customer?.email;
      setInitialValues({ ...defaultValues, ...shippingAddress, saveInBook });
    }
  }, [aggregatedData]);

  // filling shipping address field when the cart possess a shipping address
  useEffect(() => {
    if (
      !cartHasShippingAddress &&
      forceFilledAddress === selectedAddress &&
      customerHasAddress(customerAddressList)
    ) {
      setFormToViewMode();
      return;
    }

    // Toggle to view mode if there are customer address or cart address
    // This action should happen only once when the page loads.
    if (
      !forceFilledAddress &&
      (cartHasShippingAddress || customerHasAddress(customerAddressList))
    ) {
      setFormToViewMode();
    }

    // This should be happened only once when page loads
    if (!forceFilledAddress && isValidCustomerAddressId(selectedAddress)) {
      setIsNewAddress(false);
    }

    if (cartHasShippingAddress) {
      setForceFilledAddress(selectedAddress);
    }
  }, [
    selectedAddress,
    setFormToViewMode,
    forceFilledAddress,
    customerAddressList,
    cartHasShippingAddress,
  ]);

  /**
   * Perform shipping address save just before placeorder happens if in case
   * there are unsaved shipping address data.
   */
  useEffect(() => {
    registerBeforePlaceOrderAction(
      'saveShippingAddress',
      beforePlaceOrderAction,
      30
    );
  }, [beforePlaceOrderAction, registerBeforePlaceOrderAction]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  let context = {
    ...regionData,
    ...formikData,
    ...editModeContext,
    formikData,
    isNewAddress,
    backupAddress,
    setIsNewAddress,
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
  formikData: formikDataShape.isRequired,
};

export default ShippingAddressFormikProvider;
