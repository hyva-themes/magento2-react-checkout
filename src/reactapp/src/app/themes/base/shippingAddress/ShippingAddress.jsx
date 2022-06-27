import React, { useMemo } from 'react';
import { get as _get } from 'lodash-es';
import { useFormikContext } from 'formik';

import ShippingAddressMemorized from './ShippingAddressMemorized';
import { shippingAddrOtherOptionField } from './utility';
import { useShippingAddressMemorizer } from '../../../code/shippingAddress/hooks';

/**
 * Entry point of shipping address Form Section
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
function ShippingAddress() {
  const { values } = useFormikContext();
  const shippingFormikData = useShippingAddressMemorizer();
  const shippingOtherOptionSelected = _get(
    values,
    shippingAddrOtherOptionField
  );

  const formikData = useMemo(
    () => ({
      ...shippingFormikData,
      shippingOtherOptionSelected,
    }),
    [shippingFormikData, shippingOtherOptionSelected]
  );

  return <ShippingAddressMemorized formikData={formikData} />;
}

export default ShippingAddress;
