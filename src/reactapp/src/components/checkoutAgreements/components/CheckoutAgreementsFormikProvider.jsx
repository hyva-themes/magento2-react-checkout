import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';

import {
  prepareAgreementsFormData,
  updateAgreementValidationSchema,
} from '../utility';
import { _emptyFunc, _isObjEmpty } from '../../../utils';
import useFormSection from '../../../hook/useFormSection';
import { CHECKOUT_AGREEMENTS_FORM } from '../../../config';
import { formikDataShape } from '../../../utils/propTypes';
import useAgreementAppContext from '../hooks/useAgreementAppContext';
import CheckoutAgreementsFormikContext from '../context/CheckoutAgreementsFormikContext';

let initialValues = {};

function CheckoutAgreementFormikProvider({ children, formikData }) {
  const [validationSchema, setValidationSchema] = useState({});
  const [isFormPopulated, setIsFormPopulated] = useState(false);
  const { checkoutAgreements, getCheckoutAgreements } =
    useAgreementAppContext();
  const { setFieldValue } = formikData;

  // fetching checkout agreements. this needs to be happened only once
  useEffect(() => {
    getCheckoutAgreements();
  }, [getCheckoutAgreements]);

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

  const context = { ...formContext, ...formikData, formikData };

  return (
    <CheckoutAgreementsFormikContext.Provider value={context}>
      <Form id={CHECKOUT_AGREEMENTS_FORM}>{children}</Form>
    </CheckoutAgreementsFormikContext.Provider>
  );
}

CheckoutAgreementFormikProvider.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default CheckoutAgreementFormikProvider;
