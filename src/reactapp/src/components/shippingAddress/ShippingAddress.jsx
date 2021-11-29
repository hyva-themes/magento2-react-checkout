import React, { useMemo } from 'react';
import _get from 'lodash.get';
import _set from 'lodash.set';
import { useFormikContext } from 'formik';

import ShippingAddressMemorized from './ShippingAddressMemorized';
import { __ } from '../../i18n';
import { SHIPPING_ADDR_FORM } from '../../config';
import { shippingAddrOtherOptionField } from './utility';
import useFormikMemorizer from '../../hook/useFormikMemorizer';
import { billingSameAsShippingField } from '../../utils/address';
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
  const sectionFormikData = useFormikMemorizer(SHIPPING_ADDR_FORM);
  const isBillingSame = !!_get(values, billingSameAsShippingField);
  const shippingOtherOptionSelected = _get(
    values,
    shippingAddrOtherOptionField
  );
  const { formSectionValues, formSectionErrors, isFormSectionTouched } =
    sectionFormikData;
  const streetError = _get(formSectionErrors, 'street');

  if (streetError) {
    _set(
      formSectionErrors,
      'street[0]',
      __('%1 is required', 'Street Address')
    );
  }

  const shippingFormikData = useMemo(
    () => ({
      ...sectionFormikData,
      isBillingSame,
      formSectionErrors,
      shippingOtherOptionSelected,
      shippingValues: formSectionValues,
      isBillingFormTouched: isFormSectionTouched,
      selectedRegion: sectionFormikData.formSectionValues?.region,
      selectedCountry: sectionFormikData.formSectionValues?.country,
    }),
    [
      isBillingSame,
      sectionFormikData,
      formSectionValues,
      formSectionErrors,
      isFormSectionTouched,
      shippingOtherOptionSelected,
    ]
  );

  return <ShippingAddressMemorized formikData={shippingFormikData} />;
}

export default ShippingAddress;
