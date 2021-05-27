import { func, shape, string } from 'prop-types';
import React from 'react';
import RadioInput from '../../common/Form/RadioInput';
import usePaypalExpress from '../hooks/usePaypalExpress';
import Button from '../../common/Button';
import { __ } from '../../../i18n';

function PaypalExpress({ method, selected, actions }) {
  const isSelected = method.code === selected.code;
  const { authorizeUser } = usePaypalExpress();

  const CheckoutButton = () => (
    <div className="flex items-center justify-center mt-2">
      <Button click={authorizeUser} variant="success">
        {__('Update')}
      </Button>
    </div>
  );

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
      <CheckoutButton />
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
