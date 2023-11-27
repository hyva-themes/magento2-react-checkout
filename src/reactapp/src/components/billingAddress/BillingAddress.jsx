import React, { useMemo } from 'react';
import { get as _get } from 'lodash-es';
import { useFormikContext } from 'formik';

import BillingAddressMemorized from './BillingAddressMemorized';
import { BILLING_ADDR_FORM } from '../../config';
import { billingAddrOtherOptionField } from './utility';
import useFormikMemorizer from '../../hook/useFormikMemorizer';
import { billingSameAsShippingField } from '../../utils/address';

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
  const formSectionData = useFormikMemorizer(BILLING_ADDR_FORM);
  const isBillingSame = _get(values, billingSameAsShippingField);
  const { formSectionValues, isFormSectionTouched } = formSectionData;
  const billingOtherOptionSelected = _get(values, billingAddrOtherOptionField);

  const billingFormikData = useMemo(
    () => ({
      ...formSectionData,
      isBillingSame,
      billingOtherOptionSelected,
      billingValues: formSectionValues,
      isBillingAddressTouched: isFormSectionTouched,
      selectedRegion: formSectionData.formSectionValues?.region,
      selectedCountry: formSectionData.formSectionValues?.country,
    }),
    [
      isBillingSame,
      formSectionData,
      formSectionValues,
      isFormSectionTouched,
      billingOtherOptionSelected,
    ]
  );

  return <BillingAddressMemorized formikData={billingFormikData} />;
}

export default BillingAddress;
