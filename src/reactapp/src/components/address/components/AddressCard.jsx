/* eslint-disable react/no-array-index-key */
import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { ShieldCheckIcon, PencilIcon } from '@heroicons/react/solid';

import Card from '../../common/Card';
import { __ } from '../../../i18n';
import useAppContext from '../../../hook/useAppContext';

function AddressCard({ actions, title, address: { id, address } }) {
  const [{ isLoggedIn, customerAddressList }] = useAppContext();

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
          onClick={actions.performAddressEdit}
          className="flex items-center px-2 py-1 btn-secondary btn"
        >
          <PencilIcon className="w-6 h-6 pr-1" />
          <span className="text-xs">{__('Edit')}</span>
        </button>
      </div>
      {isLoggedIn && (
        <div className="flex items-center h-8 px-3 mt-3 -mx-4 -mb-4 bg-gray-200">
          <span className="text-sm italic font-semibold capitalize text-secondary">
            {customerAddressList[id]
              ? __('FROM ADDRESS BOOK')
              : __('NEW ADDRESS')}
          </span>
        </div>
      )}
    </Card>
  );
}

AddressCard.propTypes = {
  title: string,
  actions: shape({ performAddressEdit: func }).isRequired,
  address: shape({ id: string, address: arrayOf(string) }).isRequired,
};

AddressCard.defaultProps = {
  title: '',
};

export default AddressCard;
