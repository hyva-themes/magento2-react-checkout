import React from 'react';

import { SaveButton } from '../../address';
import TextInput from '../../common/Form/TextInput';
import SelectInput from '../../common/Form/SelectInput';
import CancelButton from './shippingAddressForm/CancelButton';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import SaveInBookCheckbox from '../../address/components/SaveInBookCheckbox';
import { __ } from '../../../i18n';
import { _keys } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { isValidCustomerAddressId } from '../../../utils/address';
import useCountryState from '../../address/hooks/useCountryState';
import useAddressWrapper from '../../address/hooks/useAddressWrapper';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressForm() {
  const {
    fields,
    formId,
    viewMode,
    formikData,
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

  const saveAddressAction = async () => {
    let newAddressId = selectedAddress;

    // Updating mostRecentAddressList in prior to form submit; Because values
    // there would be used in the submit action if the address is from
    // mostRecentAddressList.
    if (isLoggedIn) {
      if (isValidCustomerAddressId(selectedAddress)) {
        // This means a customer address been edited and now changed and submitted.
        // So treat this as a new address;
        const recentAddressList = LocalStorage.getMostRecentlyUsedAddressList();
        newAddressId = `new_address_${_keys(recentAddressList).length + 1}`;
        LocalStorage.addAddressToMostRecentlyUsedList(
          shippingValues,
          newAddressId
        );
      } else {
        LocalStorage.updateMostRecentlyAddedAddress(
          newAddressId,
          shippingValues
        );
      }
    }

    await formSubmitHandler(newAddressId);

    if (!isLoggedIn) {
      return;
    }

    setIsNewAddress(false);
    setSelectedAddress(newAddressId);
    LocalStorage.saveCustomerAddressInfo(newAddressId, isBillingSame);
    reCalculateMostRecentAddressOptions();
  };

  const handleCountryChange = (event) => {
    const newValue = event.target.value;
    setFieldTouched(fields.country, newValue);
    setFieldValue(fields.country, newValue);
    // when country is changed, then always reset region field.
    setFieldValue(fields.region, '');
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
        <SaveInBookCheckbox fields={fields} formikData={formikData} />
        <div className="mt-4">
          <BillingSameAsShippingCheckbox />
        </div>
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
