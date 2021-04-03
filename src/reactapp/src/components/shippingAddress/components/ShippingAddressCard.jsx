import React, { useCallback } from 'react';

import Button from '../../Common/Button';
import RadioInput from '../../Common/Form/RadioInput/RadioInput';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';

function ShippingAddressCard({
  address: { id, address },
  isSelected,
  actions,
}) {
  const { setToEditMode, setBackupAddress } = useShippingAddressWrapper();
  const { cartShippingAddress } = useShippingAddressCartContext();

  const editButtonClickHandler = useCallback(() => {
    setBackupAddress({ ...cartShippingAddress });
    setToEditMode();
  }, [cartShippingAddress, setToEditMode, setBackupAddress]);

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
            <Button click={editButtonClickHandler} variant="warning">
              edit
            </Button>
          </div>
        </li>
      )}
    </ul>
  );
}

export default ShippingAddressCard;
