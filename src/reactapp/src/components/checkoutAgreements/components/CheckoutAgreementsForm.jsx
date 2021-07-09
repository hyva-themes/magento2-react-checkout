/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { InformationCircleIcon } from '@heroicons/react/outline';

import Checkbox from '../../common/Form/Checkbox';
import { _objToArray } from '../../../utils';
import { getFormikFieldNameById } from '../utility';
import useAgreementAppContext from '../hooks/useAgreementAppContext';
import useAgreementModalContext from '../hooks/useAgreementModalContext';
import useAgreementFormikContext from '../hooks/useAgreementFormikContext';

function CheckoutAgreementsForm() {
  const { checkoutAgreements } = useAgreementAppContext();
  const { setActiveModalId } = useAgreementModalContext();
  const { fields, agreementsValues } = useAgreementFormikContext();

  return _objToArray(checkoutAgreements).map(agreement => {
    const { id: agreementId, isAutomatic, label } = agreement;
    const fieldName = getFormikFieldNameById(agreement.id);
    const isAgreed = !!_get(agreementsValues, fieldName);

    if (!isAutomatic) {
      return (
        <div key={agreementId} className="flex flex-wrap mt-3">
          <div>
            {fields[fieldName] && (
              <Checkbox
                required
                label={label}
                isChecked={isAgreed}
                name={fields[fieldName]}
              />
            )}
          </div>
          <div className="mt-3 ml-2 cursor-pointer">
            <InformationCircleIcon
              className="w-4 h-4 text-primary-600"
              onClick={() => setActiveModalId(agreementId)}
            />
          </div>
        </div>
      );
    }

    return (
      <div key={agreementId} className="flex flex-wrap mt-2">
        <div>
          <div
            key={agreementId}
            onClick={() => setActiveModalId(agreementId)}
            className="mt-3 ml-6 cursor-pointer"
          >
            {label}
          </div>
        </div>
        <div className="mt-4 ml-2 cursor-pointer">
          <InformationCircleIcon
            className="w-4 h-4 text-primary-600"
            onClick={() => setActiveModalId(agreementId)}
          />
        </div>
      </div>
    );
  });
}

export default CheckoutAgreementsForm;
