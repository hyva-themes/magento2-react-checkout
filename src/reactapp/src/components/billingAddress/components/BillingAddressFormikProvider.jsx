import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import BillingAddressFormContext from '../context/BillingAddressFormikContext';
import useFormSection from '../../../hook/useFormSection';
import useFormEditMode from '../../../hook/useFormEditMode';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import { isCartAddressValid } from '../../../utils/address';
import {
  GUEST_CART_NEW_ADDRESS,
  MY_CART_NEW_ADDRESS,
  billingAddressFormInitValues,
  prepareFormAddressFromAddressListById,
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

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

function BillingAddressFormManager({ children }) {
  const [addressInUsage, setAddressInUsage] = useState(null);
  const [addressPopulated, setAddressPopulated] = useState(null);
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    initialAddressIdInCache
  );
  const { values, setFieldValue } = useFormikContext();
  const {
    editMode,
    setFormToEditMode,
    setFormEditMode,
    setFormToViewMode,
  } = useFormEditMode();
  const {
    isLoggedIn,
    customerAddressList,
    setPageLoader,
  } = useBillingAddressAppContext();
  const {
    selectedAddressId,
    cartBillingAddress,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useBillingAddressCartContext();
  const isSame = _get(values, isSameAsShippingField);
  const billingAddrFieldValues = _get(values, BILLING_ADDR_FORM);
  const selectedCustomerAddress = prepareFormAddressFromAddressListById(
    customerAddressList,
    selectedAddressId
  );

  const formSubmit = useCallback(async () => {
    try {
      setPageLoader(true);
      await setCartBillingAddress(billingAddrFieldValues);
      setFormEditMode(false);
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setPageLoader(false);
    }
  }, [
    billingAddrFieldValues,
    setPageLoader,
    setCartBillingAddress,
    setFormEditMode,
  ]);

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
          ...cartBillingAddress,
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

  const context = {
    ...formContext,
    ...addressContext,
    editMode,
    customerAddressSelected,
    selectedBillingAddressId: addressInUsage,
    setCustomerAddressSelected,
    setFormToEditMode,
    setFormEditMode,
    setFormToViewMode,
    isBillingAddressSameAsShipping: isSame,
    resetBillingAddressFormFields,
    toggleBillingEqualsShippingState,
    mapCartBillingAddressToBillingForm,
    updateCustomerAddressAsCartAddress,
    setBillingAddressFormFields,
  };

  return (
    <BillingAddressFormContext.Provider value={context}>
      <Form>{children}</Form>
    </BillingAddressFormContext.Provider>
  );
}

BillingAddressFormManager.propTypes = {
  children: node.isRequired,
};

export default BillingAddressFormManager;
