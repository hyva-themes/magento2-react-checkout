import _set from 'lodash.set';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { _keys, _objToArray } from '../../../utils';

export function getFormikFieldNameById(agreementId) {
  return `isAgreement${agreementId}Agreed`;
}

export function prepareAgreementsFormData(checkoutAgreements) {
  return _objToArray(checkoutAgreements).reduce((agreementList, agreement) => {
    const { isAutomatic, id } = agreement;
    // eslint-disable-next-line no-param-reassign
    agreementList[getFormikFieldNameById(id)] = isAutomatic;

    return agreementList;
  }, {});
}

export function updateAgreementValidationSchema(
  agreementsFormData,
  validationSchema
) {
  const requiredMessage = __('Please agree with the terms & conditions');

  _keys(agreementsFormData).forEach(agreementFormikId => {
    _set(
      validationSchema,
      agreementFormikId,
      YupString().required(requiredMessage)
    );
  });

  return validationSchema;
}
