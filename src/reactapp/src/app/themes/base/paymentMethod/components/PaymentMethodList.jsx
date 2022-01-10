import React from 'react';
import _get from 'lodash.get';
import { object } from 'prop-types';

import { RadioInput } from '../../../../code/common/Form';
import {
  usePaymentMethodCartContext,
  usePaymentMethodFormContext,
} from '../../../../code/paymentMethod/hooks';
import { __ } from '../../../../../i18n';
import { classNames, _objToArray } from '../../../../../utils';

function PaymentMethodList({ methodRenderers }) {
  const { fields, submitHandler, formikData } = usePaymentMethodFormContext();
  const { methodList, isVirtualCart, doCartContainShippingAddress } =
    usePaymentMethodCartContext();
  const { paymentValues, setFieldValue, setFieldTouched } = formikData;
  const paymentAvailable = isVirtualCart || doCartContainShippingAddress;

  const handlePaymentMethodSelection = async (event) => {
    const methodSelected = _get(methodList, `${event.target.value}.code`);

    if (!methodSelected) {
      return;
    }

    await setFieldValue(fields.code, methodSelected);
    setFieldTouched(fields.code, true);

    // don't need to save payment method in case the method opted has a custom
    // renderer. This is because custom payment renderers may have custom
    // functionalities associated with them. So if in case they want to perform
    // save payment operation upon selection, then they need to deal with it there.
    if (!methodRenderers[methodSelected]) {
      await submitHandler(methodSelected);
    }
  };

  return (
    <div
      title={
        !paymentAvailable ? __('Please provide a shipping address first.') : ''
      }
      className={classNames(
        !paymentAvailable ? 'cursor-not-allowed opacity-40' : '',
        'py-4'
      )}
    >
      <ul>
        {_objToArray(methodList).map((method) => {
          const MethodRenderer = methodRenderers[method.code];
          return (
            <li key={method.code}>
              {MethodRenderer ? (
                <MethodRenderer
                  method={method}
                  selected={paymentValues}
                  actions={{ change: handlePaymentMethodSelection }}
                />
              ) : (
                <RadioInput
                  value={method.code}
                  label={method.title}
                  name="paymentMethod"
                  disabled={!paymentAvailable}
                  onChange={handlePaymentMethodSelection}
                  checked={method.code === paymentValues.code}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

PaymentMethodList.propTypes = {
  methodRenderers: object,
};

PaymentMethodList.defaultProps = {
  methodRenderers: {},
};

export default PaymentMethodList;
