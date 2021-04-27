import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import Button from '../../Common/Button';
import RadioInput from '../../Common/Form/RadioInput/RadioInput';

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

      {address.map(addrAttr => (
        <li key={`${id}_${addrAttr}`} className="text-sm italic">
          {addrAttr}
        </li>
      ))}

      {isSelected && (
        <li>
          <div className="flex items-center justify-center mt-2">
            <Button click={actions.performAddressEdit} variant="warning">
              edit
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
