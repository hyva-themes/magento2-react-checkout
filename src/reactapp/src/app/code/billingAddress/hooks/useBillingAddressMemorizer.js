import { useMemo } from 'react';
import _get from 'lodash.get';
import _set from 'lodash.set';
import { useFormikContext } from 'formik';

import { __ } from '../../../../i18n';
import { BILLING_ADDR_FORM } from '../../../../config';
import { useFormikMemorizer } from '../../../../hooks';
import { billingSameAsShippingField } from '../../../../utils/address';

const regionField = `${BILLING_ADDR_FORM}.region`;
const countryField = `${BILLING_ADDR_FORM}.country`;

export default function useBillingAddressMemorizer() {
  const { values } = useFormikContext();
  const formSectionData = useFormikMemorizer(BILLING_ADDR_FORM);
  const selectedRegion = _get(values, regionField);
  const selectedCountry = _get(values, countryField);
  const isBillingSame = _get(values, billingSameAsShippingField);
  const { formSectionValues, formSectionErrors, isFormSectionTouched } =
    formSectionData;
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
    ]
  );

  return billingFormikData;
}
