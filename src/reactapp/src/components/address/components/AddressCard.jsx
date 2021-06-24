/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';

import Card from '../../common/Card';
import Button from '../../common/Button';
import RadioInput from '../../common/Form/RadioInput';
import { __ } from '../../../i18n';

function AddressCard({
  actions,
  inputName,
  isSelected,
  address: { id, address },
}) {
  return (
    <Card bg="dark" classes="card-interactive">
      <ul>
        <li className="flex items-end justify-end">
          <RadioInput
            value={id}
            name={inputName}
            checked={isSelected}
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
              <Button click={actions.performAddressEdit} variant="secondary">
                {__('Edit')}
              </Button>
            </div>
          </li>
        )}
      </ul>
    </Card>
  );
}

AddressCard.propTypes = {
  isSelected: bool,
  inputName: string.isRequired,
  address: shape({ id: string, address: arrayOf(string) }).isRequired,
  actions: shape({ performAddressSwitching: func, performAddressEdit: func })
    .isRequired,
};

AddressCard.defaultProps = {
  isSelected: false,
};

export default AddressCard;
