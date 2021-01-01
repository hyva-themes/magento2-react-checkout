import React from 'react';
import _get from 'lodash.get';
import { array, objectOf, shape, string } from 'prop-types';
import useAppContext from '../../../hook/useAppContext';

function BoxItem({ name, value }) {
  return (
    <div className="flex mb-2">
      <div className="w-1/3">{`${name}:`}</div>
      <div className="flex-grow">{value}</div>
    </div>
  );
}

function AddressBox({ address }) {
  const [{ countryList }] = useAppContext();

  return (
    <div>
      <BoxItem name="Firstname" value={address.firstname} />
      <BoxItem name="Lastname" value={address.lastname} />
      <BoxItem name="Company" value={address.company} />
      <BoxItem
        name="Street"
        value={address.street.reduce((acc, cur) => `${acc}, ${cur}`)}
      />
      <BoxItem name="City" value={address.city} />
      <BoxItem
        name="country"
        value={_get(
          countryList.find(c => c.id === address.country),
          'name'
        )}
      />
      <BoxItem name="Postcode" value={address.zipcode} />
      <BoxItem name="Phone" value={address.phone} />
    </div>
  );
}

AddressBox.propTypes = {
  address: objectOf(
    shape({
      firstname: string,
      lastname: string,
      city: string,
      street: array,
      company: string,
      country: string,
      zipcode: string,
      phone: string,
    })
  ).isRequired,
};

export default AddressBox;
