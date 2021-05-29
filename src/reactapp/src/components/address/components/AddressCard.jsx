/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import Button from '../../common/Button';
import RadioInput from '../../common/Form/RadioInput';
import { __ } from '../../../i18n';

function AddressCard({ address: { id, address }, isSelected, actions }) {
  return (
    <ul className="px-4 pb-4 bg-white border-white rounded-md shadow-sm">
      <li className="flex items-end justify-end">
        <RadioInput
          name="shippingAddressChooser"
          checked={isSelected}
          value={id}
          style={isSelected ? {} : { borderColor: '#aaa' }}
          onChange={() => actions.performAddressSwitching(id)}
        />
      </li>

      {address.map((addrAttr, index) => (
        <li key={`${id}_${addrAttr}_${index}`} className="text-sm italic">
          {addrAttr}
        </li>
      ))}

      {isSelected && (
        <li>
          <div className="flex items-center justify-center mt-2">
            <Button click={actions.performAddressEdit} variant="warning">
              {__('Edit')}
            </Button>
          </div>
        </li>
      )}
    </ul>
  );
}

AddressCard.propTypes = {
  isSelected: bool,
  address: shape({ id: string, address: arrayOf(string) }).isRequired,
  actions: shape({ performAddressSwitching: func, performAddressEdit: func })
    .isRequired,
};

AddressCard.defaultProps = {
  isSelected: false,
};

export default AddressCard;
