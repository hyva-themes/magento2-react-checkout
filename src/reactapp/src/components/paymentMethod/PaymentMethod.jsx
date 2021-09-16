import React, { useMemo } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import PaymentMethodMemorized from './PaymentMethodMemorized';
import useFormikMemorizer from '../../hook/useFormikMemorizer';
import { CHECKOUT_AGREEMENTS_FORM, PAYMENT_METHOD_FORM } from '../../config';

/**
 * Entry point of payment method Form Section
 *
 * We are preparing any data related to formik state here and memorizing it.
 * After that, these info will be fed to all other child components.
 *
 * So child components DO NOT access formik states using `useFormikContext` hook
 * inside them unless it is totally unavoidable.
 *
 * Using useFormikContext hook render the component almost always. So use the
 * memorized data here inside the child components.
 */
function PaymentMethod() {
  const { values } = useFormikContext();
  const formikSectionData = useFormikMemorizer(PAYMENT_METHOD_FORM);
  const agreementsValues = _get(values, CHECKOUT_AGREEMENTS_FORM);

  const paymentFormikData = useMemo(
    () => ({
      ...formikSectionData,
      agreementsValues,
      paymentValues: formikSectionData.formSectionValues,
    }),
    [formikSectionData, agreementsValues]
  );

  return <PaymentMethodMemorized formikData={paymentFormikData} />;
}

export default PaymentMethod;
