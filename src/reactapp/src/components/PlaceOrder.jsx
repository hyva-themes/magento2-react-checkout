import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import Button from './common/Button';
import useCheckoutFormContext from '../hook/useCheckoutFormContext';
import { __ } from '../i18n';

function PlaceOrder() {
  const [isValid, setIsValid] = useState(false);
  const { values } = useFormikContext();
  const {
    checkoutFormValidationShema,
    submitHandler,
  } = useCheckoutFormContext();

  useEffect(() => {
    checkoutFormValidationShema.isValid(values).then(valid => {
      setIsValid(valid);
    });
  }, [values, checkoutFormValidationShema]);

  return (
    <div className="flex items-center justify-center h-24">
      <Button
        variant="warning"
        big
        disable={!isValid}
        click={() => submitHandler(values)}
      >
        {__('Place Order')}
      </Button>
    </div>
  );
}

export default PlaceOrder;
