import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import useCheckoutFormContext from '../../hook/useCheckoutFormContext';
import Button from '../Common/Button';

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
        Place Order
      </Button>
    </div>
  );
}

export default PlaceOrder;