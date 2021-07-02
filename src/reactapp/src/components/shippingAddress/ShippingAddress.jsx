import React, { useMemo } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import ShippingAddressMemorized from './ShippingAddressMemorized';
import useFormikMemorizer from '../../hook/useFormikMemorizer';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../config';

const regionField = `${SHIPPING_ADDR_FORM}.region`;
const countryField = `${SHIPPING_ADDR_FORM}.country`;
const isBillingSameField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

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
  const selectedCountry = _get(values, countryField);
  const selectedRegion = _get(values, regionField);
  const isBillingAddressSameAsShipping = !!_get(values, isBillingSameField);
  const { formSectionValues, isFormSectionTouched } = sectionFormikData;

  const shippingFormikData = useMemo(
    () => ({
      ...sectionFormikData,
      selectedCountry,
      selectedRegion,
      shippingValues: formSectionValues,
      isBillingAddressSameAsShipping,
      isBillingFormTouched: isFormSectionTouched,
    }),
    [
      sectionFormikData,
      selectedCountry,
      selectedRegion,
      formSectionValues,
      isBillingAddressSameAsShipping,
      isFormSectionTouched,
    ]
  );

  return <ShippingAddressMemorized formikData={shippingFormikData} />;
}

export default ShippingAddress;
