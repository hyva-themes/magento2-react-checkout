import React, { useCallback, useEffect, useMemo, useState } from 'react';
import _get from 'lodash.get';
import { node } from 'prop-types';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import {
  MY_CART_NEW_ADDRESS,
  CART_BILLING_ADDRESS,
  GUEST_CART_NEW_ADDRESS,
  billingAddressFormInitValues,
  prepareFormAddressFromCartAddress,
  prepareFormAddressFromAddressListById,
} from '../utility';
import { __ } from '../../../i18n';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import { isCartAddressValid } from '../../../utils/address';
import useRegionData from '../../address/hooks/useRegionData';
import { _isObjEmpty, _keys, _toString } from '../../../utils';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import useEnterActionInForm from '../../../hook/useEnterActionInForm';
import BillingAddressFormContext from '../context/BillingAddressFormikContext';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';

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

const toggleRegionRequiredSchema = regionRequired => {
  if (!regionRequired && validationSchema.region) {
    validationSchema.region = YupString().nullable();
  } else {
    validationSchema.region = YupString().required(requiredMessage);
  }
};

const initialAddressIdInCache = !!_toString(
  LocalStorage.getCustomerBillingAddressId()
);

const countryField = `${BILLING_ADDR_FORM}.country`;
const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function BillingAddressFormManager({ children }) {
  const addressIdInCache = _toString(
    LocalStorage.getCustomerBillingAddressId()
  );
  const [backupAddress, setBackupAddress] = useState(null);
  const [addressInUsage, setAddressInUsage] = useState(null);
  const [addressPopulated, setAddressPopulated] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(
    addressIdInCache || CART_BILLING_ADDRESS
  );
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    initialAddressIdInCache
  );
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
  const editModeContext = useFormEditMode();
  const regionData = useRegionData(BILLING_ADDR_FORM);
  const { values, setFieldValue } = useFormikContext();
  const { countryList } = useBillingAddressAppContext();
  const { setFormEditMode } = editModeContext;
  const countryValue = _get(values, countryField);
  const isSame = _get(values, isSameAsShippingField);
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
        setCustomerAddressSelected(true);
        setSelectedAddress(addressInUsage);
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
    isSame,
    setFieldValue,
    addressInUsage,
    setFormEditMode,
    addressPopulated,
    selectedAddressId,
    cartBillingAddress,
    setAddressPopulated,
    selectedCustomerAddress,
  ]);

  useEffect(() => {
    setSelectedAddress(addressIdInCache);
  }, [addressIdInCache]);

  // whenever country value changed, we will find the country entry from the countryList
  // so that we can toggle the validation on the `region` field
  useEffect(() => {
    if (countryList && countryValue) {
      const regionRequired = !!countryList.find(
        country => country.id === countryValue
      )?.state_required;

      toggleRegionRequiredSchema(regionRequired);
    }
  }, [countryValue, countryList]);

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
    ...regionData,
    ...addressContext,
    ...editModeContext,
    backupAddress,
    selectedAddress,
    setBackupAddress,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    setBillingAddressFormFields,
    resetBillingAddressFormFields,
    toggleBillingEqualsShippingState,
    mapCartBillingAddressToBillingForm,
    updateCustomerAddressAsCartAddress,
    isBillingAddressSameAsShipping: isSame,
    selectedBillingAddressId: addressInUsage,
  };

  const formSubmit = useSaveAddressAction(context);
  const handleKeyDown = useEnterActionInForm({
    validationSchema,
    submitHandler: formSubmit,
    formId: BILLING_ADDR_FORM,
  });

  const formContext = useFormSection({
    initialValues,
    validationSchema,
    id: BILLING_ADDR_FORM,
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
