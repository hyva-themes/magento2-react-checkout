import React, { useContext, useEffect, useMemo } from 'react';
import _get from 'lodash.get';
import { node, string } from 'prop-types';
import { useFormikContext } from 'formik';

import SelectInput from '../../Common/Form/SelectInput';
import ToggleBox from '../../Common/ToggleBox';
import TextInput from '../../Common/Form/TextInput';
import Card from '../../Common/Card';
import useAppContext from '../../../hook/useAppContext';
import { _objToArray } from '../../../utils';

function AddressFields({ children, context, title }) {
  const { fields, handleFocus } = useContext(context);
  const { values, setFieldValue } = useFormikContext();
  const countrySelected = _get(values, fields.country);
  const regionField = fields.region;
  const stateSelected = _get(values, regionField);
  const [
    { countryList, stateList, customerAddressList, isLoggedIn },
  ] = useAppContext();

  // whenever the country is swiched, we need to clear the state input
  useEffect(() => {
    if (countrySelected) {
      const stateListContainsStateSelected = _get(
        stateList,
        countrySelected,
        []
      ).find(s => s.code === stateSelected);

      if (!stateListContainsStateSelected) {
        setFieldValue(regionField, '');
      }
    }
  }, [countrySelected, regionField, stateSelected, stateList, setFieldValue]);

  const countryOptions = useMemo(
    () =>
      countryList.map(country => ({
        value: country.id,
        label: country.name,
      })),
    [countryList]
  );

  const stateOptions = useMemo(
    () =>
      _get(stateList, countrySelected, []).map(state => ({
        value: state.code,
        label: state.name,
      })),
    [stateList, countrySelected]
  );

  const customerAddrOptions = useMemo(
    () =>
      _objToArray(customerAddressList).map(addr => ({
        value: addr.id,
        label: [
          _get(addr, 'fullName', ''),
          ...(_get(addr, 'street', []) || []),
          _get(addr, 'city', ''),
          _get(addr, 'regionLabel', ''),
          _get(addr, 'countryCode', ''),
          addr.zipcode ? `pin: ${addr.zipcode}` : '',
        ].join(', '),
      })),
    [customerAddressList]
  );

  if (isLoggedIn) {
    return (
      <Card bg="dark">
        <ToggleBox title={title} show>
          <div className="py-2">
            <SelectInput
              label="Pick your address from book"
              name="customerAddress"
              options={customerAddrOptions}
              onFocus={handleFocus}
            />
          </div>
          <div className="py-2">
            <span className="flex items-center justify-center text-sm underline">
              No, I want to ship to a new address
            </span>
          </div>
        </ToggleBox>
      </Card>
    );
  }

  return (
    <Card bg="dark">
      <ToggleBox title={title} show>
        <div className="py-2">
          <TextInput
            label="Company"
            name={fields.company}
            placeholder="Company"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Firstname"
            name={fields.firstname}
            placeholder="Firstname"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Lastname"
            name={fields.lastname}
            placeholder="Lastname"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Street"
            name={`${fields.street}[0]`}
            placeholder="Street"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Postal Code"
            name={fields.zipcode}
            placeholder="12345"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="City"
            name={fields.city}
            placeholder="City"
            required
            onFocus={handleFocus}
          />
          <SelectInput
            label="State"
            name={fields.region}
            required
            options={stateOptions}
            onFocus={handleFocus}
          />
          <SelectInput
            label="Country"
            name={fields.country}
            required
            options={countryOptions}
            onFocus={handleFocus}
          />
          <TextInput
            label="Phone"
            name={fields.phone}
            placeholder="+32 000 000 000"
            required
            onFocus={handleFocus}
          />
        </div>

        {children}
      </ToggleBox>
    </Card>
  );
}

AddressFields.propTypes = {
  children: node.isRequired,
  context: node.isRequired,
  title: string.isRequired,
};

export default AddressFields;
