import React from 'react';
import { object } from 'prop-types';
import _get from 'lodash.get';

import { RadioInput } from '../../../../code/common/Form';
import {
  usePaymentMethodCartContext,
  usePaymentMethodFormContext,
} from '../../../../code/paymentMethod/hooks';
import { _objToArray } from '../../../../../utils';

function PaymentMethodList({ methodRenderers }) {
  const { fields, submitHandler, formikData } = usePaymentMethodFormContext();
  const { methodList } = usePaymentMethodCartContext();
  const { paymentValues, setFieldValue, setFieldTouched } = formikData;

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
    <div className="py-4">
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
                  label={method.title}
                  name="paymentMethod"
                  value={method.code}
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
