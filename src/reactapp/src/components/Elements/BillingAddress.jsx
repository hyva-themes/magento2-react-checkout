import React from 'react';
import { FormikProvider, Form } from 'formik';

import { useFormikContext } from '../../context/Formik';
import { useAppContext } from '../../context/App';
import * as appStates from '../../context/actions/actionStates';
import { RegularSelect } from './FormUI/RegularSelect';
import ToggleBox from '../Common/ToggleBox';
import TextInput from '../Common/Form/TextInput';

export const BillingAddress = () => {
  const [{ BillingAddressForm }] = useFormikContext();

  const [{ countries, billingOpen }, { fetchCountries }] = useAppContext();

  React.useEffect(() => {
    if (
      (!countries.data || !countries.data.length) &&
      countries.state !== appStates.PENDING
    ) {
      fetchCountries();
    }
  }, [countries, fetchCountries]);

  return (
    <ToggleBox title="Billing information" show>
      {billingOpen && (
        <div className="py-2">
          <FormikProvider value={BillingAddressForm}>
            <Form>
              <TextInput
                label="Company"
                name="company"
                placeholder="Company"
                required
              />
              <TextInput
                label="Firstname"
                name="firstname"
                placeholder="Firstname"
                required
              />
              <TextInput
                label="Lastname"
                name="lastname"
                placeholder="Lastname"
                required
              />
              <TextInput
                label="Street, Nr"
                name="street"
                placeholder="Street"
                required
              />
              <TextInput
                label="Postal Code"
                name="zipcode"
                placeholder="12345"
                required
              />
              <TextInput label="City" name="city" placeholder="City" required />
              <RegularSelect
                label="Country"
                id="country"
                name="country"
                required
                options={countries.data}
              />
              <TextInput
                label="Phone"
                name="phone"
                placeholder="+32 000 000 000"
                required
              />
            </Form>
          </FormikProvider>
        </div>
      )}
    </ToggleBox>
  );
};
