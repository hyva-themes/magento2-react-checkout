/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';

function CreateNewAddressLink() {
  const { resetShippingAddressFormFields } = useShippingAddressFormikContext();
  const { setToEditMode } = useShippingAddressWrapper();

  const clickHandler = useCallback(() => {
    resetShippingAddressFormFields();
    setToEditMode();
  }, [setToEditMode, resetShippingAddressFormFields]);

  return (
    <div className="flex items-center justify-center mt-2">
      <span className="text-sm underline cursor-pointer" onClick={clickHandler}>
        Create a new address
      </span>
    </div>
  );
}

export default CreateNewAddressLink;
