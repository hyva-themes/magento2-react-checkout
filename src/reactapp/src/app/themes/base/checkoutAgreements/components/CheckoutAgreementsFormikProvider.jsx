import React, { useEffect, useState, useMemo } from 'react';
import { node } from 'prop-types';

import {
  prepareAgreementsFormData,
  updateAgreementValidationSchema,
} from '../utility';
import { useFormSection } from '../../../../../hooks';
import { _emptyFunc, _isObjEmpty } from '../../../../../utils';
import { CHECKOUT_AGREEMENTS_FORM } from '../../../../../config';
import { formikDataShape } from '../../../../../utils/propTypes';
import { useAgreementAppContext } from '../../../../code/checkoutAgreements/hooks';
import { CheckoutAgreementsFormikContext } from '../../../../code/checkoutAgreements/context';

let initialValues = {};

function CheckoutAgreementFormikProvider({ children, formikData }) {
  const [validationSchema, setValidationSchema] = useState({});
  const [isFormPopulated, setIsFormPopulated] = useState(false);
  const { checkoutAgreements } = useAgreementAppContext();
  const { setFieldValue } = formikData;

  // updating formik values and validation after fetching checkout agreements.
  // this needs to be happened only once.
  useEffect(() => {
    if (!isFormPopulated && !_isObjEmpty(checkoutAgreements)) {
      const agreementsFormData = prepareAgreementsFormData(checkoutAgreements);
      initialValues = agreementsFormData;
      setFieldValue(CHECKOUT_AGREEMENTS_FORM, agreementsFormData);
      setValidationSchema(
        updateAgreementValidationSchema(agreementsFormData, validationSchema)
      );
      setIsFormPopulated(true);
    }
  }, [checkoutAgreements, setFieldValue, isFormPopulated, validationSchema]);

  // registering checkout agreements into the global formik state
  const formContext = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    submitHandler: _emptyFunc(),
    id: CHECKOUT_AGREEMENTS_FORM,
  });

  const context = useMemo(
    () => ({ ...formContext, ...formikData, formikData }),
    [formikData, formContext]
  );

  return (
    <CheckoutAgreementsFormikContext.Provider value={context}>
      <div id={CHECKOUT_AGREEMENTS_FORM}>{children}</div>
    </CheckoutAgreementsFormikContext.Provider>
  );
}

CheckoutAgreementFormikProvider.propTypes = {
  children: node,
  formikData: formikDataShape.isRequired,
};

CheckoutAgreementFormikProvider.defaultProps = {
  children: null,
};

export default CheckoutAgreementFormikProvider;
