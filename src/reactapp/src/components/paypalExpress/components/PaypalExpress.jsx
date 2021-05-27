import { func, shape, string } from 'prop-types';
import React, { useEffect } from 'react';
import RadioInput from '../../common/Form/RadioInput';
import usePaypalExpress from '../hooks/usePaypalExpress';
import useCheckoutFormContext from '../../../hook/useCheckoutFormContext';

function PaypalExpress({ method, selected, actions }) {
  const isSelected = method.code === selected.code;
  const { authorizeUser } = usePaypalExpress();
  const { registerPaymentAction } = useCheckoutFormContext();

  useEffect(() => {
    registerPaymentAction('paypal_express', authorizeUser);
  }, [authorizeUser, registerPaymentAction]);

  if (!isSelected) {
    return (
      <>
        <RadioInput
          label={method.title}
          name="paymentMethod"
          value={method.code}
          onChange={actions.change}
          checked={isSelected}
        />
      </>
    );
  }

  return (
    <div className="w-full">
      <div>
        <RadioInput
          label={method.title}
          name="paymentMethod"
          value={method.code}
          onChange={actions.change}
          checked={isSelected}
        />
      </div>
    </div>
  );
}

const methodShape = shape({
  title: string.isRequired,
  code: string.isRequired,
});

PaypalExpress.propTypes = {
  method: methodShape.isRequired,
  selected: methodShape.isRequired,
  actions: shape({ change: func }),
};

export default PaypalExpress;
