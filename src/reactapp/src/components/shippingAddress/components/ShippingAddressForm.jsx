import React from 'react';

import { SaveButton } from '../../address';
import TextInput from '../../common/Form/TextInput';
import SelectInput from '../../common/Form/SelectInput';
import CancelButton from './shippingAddressForm/CancelButton';
import { __mt } from '../../../i18n';
import { _keys } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { isMostRecentAddress } from '../../../utils/address';
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
    isNewAddress,
    handleKeyDown,
    submitHandler,
    isBillingSame,
    shippingValues,
    selectedCountry,
    selectedAddress,
    setIsNewAddress,
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
    return <></>;
  }

  return (
    <>
      <div className="py-2">
        <TextInput
          required
          label={__mt('Company')}
          name={fields.company}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__mt('Company')}
        />
        <TextInput
          required
          name={fields.firstname}
          formikData={formikData}
          label={__mt('First name')}
          onKeyDown={handleKeyDown}
          placeholder={__mt('First name')}
        />
        <TextInput
          required
          name={fields.lastname}
          label={__mt('Last name')}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__mt('Last name')}
        />
        <TextInput
          required
          label={__mt('Street')}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__mt('Street')}
          name={`${fields.street}[0]`}
        />
        <TextInput
          required
          placeholder="12345"
          name={fields.zipcode}
          formikData={formikData}
          label={__mt('Postal Code')}
          onKeyDown={handleKeyDown}
        />
        <TextInput
          required
          label={__mt('City')}
          name={fields.city}
          formikData={formikData}
          placeholder={__mt('City')}
          onKeyDown={handleKeyDown}
        />

        <SelectInput
          required
          label={__mt('Country')}
          name={fields.country}
          formikData={formikData}
          options={countryOptions}
          onKeyDown={handleKeyDown}
        />

        <SelectInput
          required
          label={__mt('State')}
          name={fields.region}
          options={stateOptions}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          isHidden={!selectedCountry || !hasStateOptions}
        />

        <TextInput
          required
          label={__mt('Phone')}
          name={fields.phone}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__mt('+32 000 000 000')}
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
