import _set from 'lodash.set';
import { bool as YupBool } from 'yup';

import { __ } from '../../../../../i18n';
import { _keys, _objToArray } from '../../../../../utils';

export function getFormikFieldNameById(agreementId) {
  return `isAgreement${agreementId}Agreed`;
}

export function prepareAgreementsFormData(checkoutAgreements) {
  return _objToArray(checkoutAgreements).reduce((accumulator, agreement) => {
    const { isAutomatic, id } = agreement;
    accumulator[getFormikFieldNameById(id)] = isAutomatic;

    return accumulator;
  }, {});
}

export function updateAgreementValidationSchema(
  agreementsFormData,
  validationSchema
) {
  const requiredMessage = __('Please agree with the terms & conditions');

  _keys(agreementsFormData).forEach((agreementFormikId) => {
    _set(
      validationSchema,
      agreementFormikId,
      YupBool().oneOf([true], requiredMessage)
    );
  });

  return validationSchema;
}
