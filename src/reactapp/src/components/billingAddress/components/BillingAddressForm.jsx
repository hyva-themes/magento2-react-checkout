import React from 'react';

import { SaveButton } from '../../address';
import CancelButton from './billingAddressForm/CancelButton';
import SaveInBookCheckbox from '../../address/components/SaveInBookCheckbox';
import { _keys } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { useAddressFieldRenderer } from '../../address/hooks';
import { isValidCustomerAddressId } from '../../../utils/address';
import useAddressWrapper from '../../address/hooks/useAddressWrapper';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressForm() {
  const {
    fields,
    formId,
    viewMode,
    formikData,
    submitHandler,
    handleKeyDown,
    billingValues,
    isBillingSame,
    setIsNewAddress,
    selectedAddress,
    validationSchema,
    setSelectedAddress,
  } = useBillingAddressFormikContext();
  const { isLoggedIn } = useBillingAddressAppContext();
  const { reCalculateMostRecentAddressOptions } = useAddressWrapper();
  const addressFields = useAddressFieldRenderer(formikData.formSectionId);
  const formSubmitHandler = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema,
  });

  const { isBillingAddressTouched } = formikData;

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
          billingValues,
          newAddressId
        );
      } else {
        LocalStorage.updateMostRecentlyAddedAddress(
          newAddressId,
          billingValues
        );
      }
    }

    await formSubmitHandler(newAddressId);

    if (!isLoggedIn) {
      return;
    }

    setIsNewAddress(false);
    setSelectedAddress(newAddressId);
    LocalStorage.saveCustomerAddressInfo(newAddressId, isBillingSame, false);
    reCalculateMostRecentAddressOptions();
  };

  if (viewMode) {
    return null;
  }

  return (
    <>
      <div className="py-2">
        {addressFields.map(({ FieldRenderer, config }) => (
          <FieldRenderer
            config={config}
            key={config.code}
            formikData={formikData}
            onKeyDown={handleKeyDown}
          />
        ))}
        <SaveInBookCheckbox fields={fields} formikData={formikData} />
      </div>

      <div className="flex items-center justify-around mt-2">
        <CancelButton />
        <SaveButton
          isFormValid={isBillingAddressTouched}
          actions={{ saveAddress: saveAddressAction }}
        />
      </div>
    </>
  );
}

export default BillingAddressForm;
