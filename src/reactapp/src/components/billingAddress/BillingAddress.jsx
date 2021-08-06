import React, { useMemo } from 'react';
import _get from 'lodash.get';
import _set from 'lodash.set';
import { useFormikContext } from 'formik';

import BillingAddressMemorized from './BillingAddressMemorized';
import { BILLING_ADDR_FORM } from '../../config';
import { billingAddrOtherOptionField } from './utility';
import useFormikMemorizer from '../../hook/useFormikMemorizer';
import { billingSameAsShippingField } from '../../utils/address';
import { __ } from '../../i18n';

const regionField = `${BILLING_ADDR_FORM}.region`;
const countryField = `${BILLING_ADDR_FORM}.country`;

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
  const selectedRegion = _get(values, regionField);
  const selectedCountry = _get(values, countryField);
  const isBillingSame = _get(values, billingSameAsShippingField);
  const billingOtherOptionSelected = _get(values, billingAddrOtherOptionField);
  const {
    formSectionValues,
    formSectionErrors,
    isFormSectionTouched,
  } = formSectionData;
  const streetError = _get(formSectionErrors, 'street');

  if (streetError) {
    _set(
      formSectionErrors,
      'street[0]',
      __('%1 is required', 'Street Address')
    );
  }

  const billingFormikData = useMemo(
    () => ({
      ...formSectionData,
      isBillingSame,
      selectedRegion,
      selectedCountry,
      formSectionErrors,
      billingOtherOptionSelected,
      billingValues: formSectionValues,
      isBillingAddressTouched: isFormSectionTouched,
    }),
    [
      isBillingSame,
      selectedRegion,
      formSectionData,
      selectedCountry,
      formSectionErrors,
      formSectionValues,
      isFormSectionTouched,
      billingOtherOptionSelected,
    ]
  );

  return <BillingAddressMemorized formikData={billingFormikData} />;
}

export default BillingAddress;
