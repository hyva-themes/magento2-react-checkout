/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { ShieldCheckIcon, TruckIcon, PencilIcon } from '@heroicons/react/solid';

import Card from '../../common/Card';
import Button from '../../common/Button';
import RadioInput from '../../common/Form/RadioInput';
import { __ } from '../../../i18n';

function AddressCard({ actions, title, address: { id, address } }) {
  return (
    <Card bg="dark" classes="card-interactive">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold text-black">{title}</h3>
        <ShieldCheckIcon className="w-6 h-6 -m-2 text-green-700" />
      </div>
      <hr />
      <ul className="pt-3">
        {address.map((addrAttr, index) => (
          <li
            key={`${id}_${addrAttr}_${index}`}
            className="text-sm italic text-black"
          >
            {addrAttr}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end px-3">
        <button
          type="button"
          className="flex items-center px-2 py-1 btn-secondary btn"
          onClick={actions.performAddressEdit}
        >
          <PencilIcon className="w-6 h-6 pr-1" />
          <span className="text-xs">{__('Edit')}</span>
        </button>
      </div>
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
