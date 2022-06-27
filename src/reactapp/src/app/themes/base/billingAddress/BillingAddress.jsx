import React, { useMemo } from 'react';
import { get as _get } from 'lodash-es';
import { useFormikContext } from 'formik';

import BillingAddressMemorized from './BillingAddressMemorized';
import { billingAddrOtherOptionField } from './utility';
import { useBillingAddressMemorizer } from '../../../code/billingAddress/hooks';

/**
 * Entry point Billing Address Form Section
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
function BillingAddress() {
  const { values } = useFormikContext();
  const formikData = useBillingAddressMemorizer();
  const billingOtherOptionSelected = _get(values, billingAddrOtherOptionField);

  const billingFormikData = useMemo(
    () => ({
      ...formikData,
      billingOtherOptionSelected,
    }),
    [formikData, billingOtherOptionSelected]
  );

  return <BillingAddressMemorized formikData={billingFormikData} />;
}

export default BillingAddress;
