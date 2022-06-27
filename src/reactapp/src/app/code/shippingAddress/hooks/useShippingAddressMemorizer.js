import { useMemo } from 'react';
import { get as _get } from 'lodash-es';
import { set as _set } from 'lodash-es';
import { useFormikContext } from 'formik';

import { __ } from '../../../../i18n';
import { useFormikMemorizer } from '../../../../hooks';
import { SHIPPING_ADDR_FORM } from '../../../../config';
import { billingSameAsShippingField } from '../../../../utils/address';

const regionField = `${SHIPPING_ADDR_FORM}.region`;
const countryField = `${SHIPPING_ADDR_FORM}.country`;

export default function useShippingAddressMemorizer() {
  const { values } = useFormikContext();
  const sectionFormikData = useFormikMemorizer(SHIPPING_ADDR_FORM);
  const selectedRegion = _get(values, regionField);
  const selectedCountry = _get(values, countryField);
  const isBillingSame = !!_get(values, billingSameAsShippingField);
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
      selectedRegion,
      selectedCountry,
      formSectionErrors,
      shippingValues: formSectionValues,
      isBillingFormTouched: isFormSectionTouched,
    }),
    [
      isBillingSame,
      selectedRegion,
      selectedCountry,
      sectionFormikData,
      formSectionValues,
      formSectionErrors,
      isFormSectionTouched,
    ]
  );

  return shippingFormikData;
}
