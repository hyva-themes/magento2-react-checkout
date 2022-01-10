import React from 'react';

import { SaveButton } from '../../address';
import CancelButton from './shippingAddressForm/CancelButton';
import { SelectInput, TextInput } from '../../../../code/common/Form';

import {
  useShippingAddressAppContext,
  useShippingAddressFormikContext,
} from '../../../../code/shippingAddress/hooks';
import { __ } from '../../../../../i18n';
import { _keys } from '../../../../../utils';
import LocalStorage from '../../../../../utils/localStorage';
import { useFormValidateThenSubmit } from '../../../../../hooks';
import { isMostRecentAddress } from '../../../../../utils/address';
import { useAddressWrapper, useCountryState } from '../../address/hooks';

function ShippingAddressForm() {
  const {
    fields,
    formId,
    viewMode,
    formikData,
    isNewAddress,
    handleKeyDown,
    submitHandler,
    isBillingSame,
    setFieldValue,
    shippingValues,
    selectedCountry,
    selectedAddress,
    setIsNewAddress,
    setFieldTouched,
    validationSchema,
    setSelectedAddress,
    isBillingFormTouched,
  } = useShippingAddressFormikContext();
  const { isLoggedIn } = useShippingAddressAppContext();
  const { reCalculateMostRecentAddressOptions } = useAddressWrapper();
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
    formikData,
  });
  const formSubmitHandler = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema,
  });

  const handleCountryChange = (event) => {
    const newValue = event.target.value;
    setFieldTouched(fields.country, newValue);
    setFieldValue(fields.country, newValue);
    // when country is changed, then always reset region field.
    setFieldValue(fields.region, '');
  };

  const saveAddressAction = async () => {
    await formSubmitHandler();

    if (!isLoggedIn) {
      return;
    }

    if (isNewAddress) {
      const recentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
      const newAddressId = `new_address_${_keys(recentAddressList).length + 1}`;
      LocalStorage.addAddressToMostRecentlyUsedList(shippingValues);
      setIsNewAddress(false);
      setSelectedAddress(newAddressId);
      LocalStorage.saveCustomerAddressInfo(newAddressId, isBillingSame);
      reCalculateMostRecentAddressOptions();
    }

    if (isMostRecentAddress(selectedAddress)) {
      LocalStorage.updateMostRecentlyAddedAddress(
        selectedAddress,
        shippingValues
      );
      reCalculateMostRecentAddressOptions();
    }
  };

  if (viewMode) {
    return null;
  }

  return (
    <>
      <div className="py-2">
        <TextInput
          required
          label={__('Company')}
          name={fields.company}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__('Company')}
        />
        <TextInput
          required
          name={fields.firstname}
          formikData={formikData}
          label={__('First name')}
          onKeyDown={handleKeyDown}
          placeholder={__('First name')}
        />
        <TextInput
          required
          name={fields.lastname}
          label={__('Last name')}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__('Last name')}
        />
        <TextInput
          required
          label={__('Street')}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__('Street')}
          name={`${fields.street}[0]`}
        />
        <TextInput
          required
          placeholder="12345"
          name={fields.zipcode}
          formikData={formikData}
          label={__('Postal Code')}
          onKeyDown={handleKeyDown}
        />
        <TextInput
          required
          label={__('City')}
          name={fields.city}
          formikData={formikData}
          placeholder={__('City')}
          onKeyDown={handleKeyDown}
        />

        <SelectInput
          required
          label={__('Country')}
          name={fields.country}
          formikData={formikData}
          options={countryOptions}
          onChange={handleCountryChange}
        />

        <SelectInput
          required
          label={__('State')}
          name={fields.region}
          options={stateOptions}
          formikData={formikData}
          isHidden={!selectedCountry || !hasStateOptions}
        />

        <TextInput
          required
          label={__('Phone')}
          name={fields.phone}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__('+32 000 000 000')}
        />
      </div>

      <div className="flex items-center justify-around mt-2">
        <CancelButton />
        <SaveButton
          isFormValid={isBillingFormTouched}
          actions={{ saveAddress: saveAddressAction }}
        />
      </div>
    </>
  );
}

export default ShippingAddressForm;
