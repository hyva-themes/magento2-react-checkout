import React from 'react';

import { SaveButton } from '../../address';
import CancelButton from './shippingAddressForm/CancelButton';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import SaveInBookCheckbox from '../../address/components/SaveInBookCheckbox';
import { _keys } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { useAddressFieldRenderer } from '../../address/hooks';
import { isValidCustomerAddressId } from '../../../utils/address';
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
    shippingValues,
    selectedAddress,
    setIsNewAddress,
    validationSchema,
    setSelectedAddress,
    isBillingFormTouched,
  } = useShippingAddressFormikContext();
  const { isLoggedIn } = useShippingAddressAppContext();
  const { reCalculateMostRecentAddressOptions } = useAddressWrapper();
  const addressFields = useAddressFieldRenderer(formikData.formSectionId);
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
