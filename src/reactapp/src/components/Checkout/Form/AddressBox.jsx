import React from 'react';

import RadioInput from '../../Common/Form/RadioInput/RadioInput';
import { modifyAddrObjListToArrayList } from '../../../utils/address';
import useShippingAddressContext from '../../../hook/form/useShippingAddressContext';
import useShippingAddrCartContext from '../../../hook/cart/useShippingAddrCartContext';

function AddressBox() {
  const { fields, addressList } = useShippingAddressContext();
  const { selectedAddressId } = useShippingAddrCartContext();

  const customerAddresses = modifyAddrObjListToArrayList(addressList);

  return (
    <div className="mx-2 space-y-3">
      {customerAddresses.map(({ id, address }) => (
        <ul
          key={id}
          className="px-4 pb-4 bg-white border-white rounded-md shadow-sm"
        >
          <li className="flex items-end justify-end">
            <RadioInput
              name={fields.selectedAddress}
              checked={selectedAddressId.toString() === id}
              value={id}
            />
          </li>
          {address.map(addrAttr => (
            <li key={`${id}_${addrAttr}`} className="text-sm italic">
              {addrAttr}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default AddressBox;
