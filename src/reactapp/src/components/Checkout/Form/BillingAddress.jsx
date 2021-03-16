import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Card from '../../Common/Card';
import Button from '../../Common/Button';
import AddressFields from './AddressFields';
import ToggleBox from '../../Common/ToggleBox';
import Checkbox from '../../Common/Form/Checkbox';
import BillingAddressBox from './Billing/BillingAddressBox';
import { BILLING_ADDR_FORM } from '../../../config';
import useBillingAddressContext, {
  BillingAddressFormContext,
} from '../../../hook/form/useBillingAddressContext';
import useBillingAddrAppContext from '../../../hook/app/useBillingAddrAppContext';
import useBillingAddrCartContext from '../../../hook/cart/useBillingAddrCartContext';
import { isCartBillingAddressValid } from '../../../utils/address';

function BillingAddress() {
  const { values } = useFormikContext();
  const billingAddress = _get(values, BILLING_ADDR_FORM, {});
  const {
    editMode,
    fields,
    isBillingAddressSameAsShipping,
    isFormValid,
    submitHandler,
    setFormEditMode,
  } = useBillingAddressContext();
  const { isLoggedIn } = useBillingAddrAppContext();
  const { cartBillingAddress } = useBillingAddrCartContext();
  const hasAddress = isCartBillingAddressValid(cartBillingAddress);

  if (isBillingAddressSameAsShipping) {
    return (
      <Card bg="dark">
        <ToggleBox title="Billing information" show>
          <Checkbox
            name={fields.isSameAsShipping}
            label="My billing & shipping address are same"
            isChecked
          />
        </ToggleBox>
      </Card>
    );
  }

  if (!editMode) {
    return (
      <Card bg="dark">
        <ToggleBox title="Billing information" show>
          <div className="py-2">
            <BillingAddressBox address={billingAddress} />
          </div>

          <div className="flex items-center justify-center h-10 my-4 text-sm font-semibold">
            OR
          </div>

          <Checkbox
            name={fields.isSameAsShipping}
            label="My billing & shipping address are same"
          />
        </ToggleBox>
      </Card>
    );
  }

  const saveButton = (
    <Button click={submitHandler} variant="success" disable={!isFormValid}>
      save
    </Button>
  );

  return (
    <AddressFields
      title="Billing Information"
      context={BillingAddressFormContext}
    >
      {isLoggedIn || (!isLoggedIn && hasAddress) ? (
        <div className="flex items-center justify-around mt-2">
          <Button click={() => setFormEditMode(false)} variant="warning">
            cancel
          </Button>
          {saveButton}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-2">
          {saveButton}
        </div>
      )}
      <div className="flex items-center justify-center h-10 my-4 text-sm font-semibold">
        OR
      </div>

      <Checkbox
        name={fields.isSameAsShipping}
        label="My billing & shipping address are same"
      />
    </AddressFields>
  );
}

export default BillingAddress;
