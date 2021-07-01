import React, { useEffect, useState } from 'react';
import { Form } from 'formik';
import { node, object } from 'prop-types';

import {
  prepareAgreementsFormData,
  updateAgreementValidationSchema,
} from '../utility';
import { _emptyFunc, _isObjEmpty } from '../../../utils';
import useFormSection from '../../../hook/useFormSection';
import { CHECKOUT_AGREEMENTS_FORM } from '../../../config';
import useAgreementAppContext from '../hooks/useAgreementAppContext';
import CheckoutAgreementsFormikContext from '../context/CheckoutAgreementsFormikContext';

let initialValues = {};

function CheckoutAgreementFormikProvider({ children, formikData }) {
  const [validationSchema, setValidationSchema] = useState({});
  const [isFormPopulated, setIsFormPopulated] = useState(false);
  const {
    checkoutAgreements,
    getCheckoutAgreements,
  } = useAgreementAppContext();
  const { setFieldValue } = formikData;

  useEffect(() => {
    getCheckoutAgreements();
  }, [getCheckoutAgreements]);

  useEffect(() => {
    if (!isFormPopulated && !_isObjEmpty(checkoutAgreements)) {
      const agreementsFormData = prepareAgreementsFormData(checkoutAgreements);
      setFieldValue(CHECKOUT_AGREEMENTS_FORM, agreementsFormData);
      initialValues = agreementsFormData;
      setValidationSchema(
        updateAgreementValidationSchema(agreementsFormData, validationSchema)
      );
      setIsFormPopulated(true);
    }
  }, [checkoutAgreements, setFieldValue, isFormPopulated, validationSchema]);

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
  formikData: object.isRequired,
};

export default CheckoutAgreementFormikProvider;
