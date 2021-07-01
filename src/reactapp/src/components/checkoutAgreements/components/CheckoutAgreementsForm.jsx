/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { func, shape } from 'prop-types';
import { InformationCircleIcon } from '@heroicons/react/outline';

import Checkbox from '../../common/Form/Checkbox';
import { _objToArray } from '../../../utils';
import { getFormikFieldNameById } from '../utility';
import useAgreementAppContext from '../hooks/useAgreementAppContext';
import useAgreementFormikContext from '../hooks/useAgreementFormikContext';

function CheckoutAgreementsForm({ actions }) {
  const { checkoutAgreements } = useAgreementAppContext();
  const { fields, agreementsValues } = useAgreementFormikContext();

  return _objToArray(checkoutAgreements).map(agreement => {
    const { id: agreementId, isAutomatic, label } = agreement;
    const fieldName = getFormikFieldNameById(agreement.id);
    const isAgreed = !!_get(agreementsValues, fieldName);

    if (!isAutomatic) {
      return (
        <div className="flex flex-wrap mt-3">
          <div>
            <Checkbox
              required
              label={label}
              key={agreementId}
              isChecked={isAgreed}
              name={fields[fieldName]}
            />
          </div>
          <div className="mt-3 ml-2 cursor-pointer">
            <InformationCircleIcon
              className="w-4 h-4 text-primary-600"
              onClick={() => actions.setActiveModalId(agreementId)}
            />
          </div>
        </div>
      );
    }

    return (
      <div
        className="mt-3 ml-6 text-blue-700 cursor-pointer hover:underline"
        onClick={() => actions.setActiveModalId(agreementId)}
      >
        {label}
      </div>
    );
  });
}

CheckoutAgreementsForm.propTypes = {
  actions: shape({ setActiveModalId: func }).isRequired,
}

export default CheckoutAgreementsForm;
