import React, { useMemo } from 'react';
import _get from 'lodash/get';
import { node } from 'prop-types';
import { useFormikContext } from 'formik';

import AddressWrapperMemorized from './AddressWrapperMemorized';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../../config';

const billingCountryField = `${BILLING_ADDR_FORM}.country`;
const shippingCountryField = `${SHIPPING_ADDR_FORM}.country`;

function AddressWrapper({ children }) {
  const { values } = useFormikContext();
  const billingCountry = _get(values, billingCountryField);
  const shippingCountry = _get(values, shippingCountryField);

  const formikData = useMemo(
    () => ({ billingCountry, shippingCountry }),
    [billingCountry, shippingCountry]
  );

  return (
    <AddressWrapperMemorized formikData={formikData}>
      {children}
    </AddressWrapperMemorized>
  );
}

AddressWrapper.propTypes = {
  children: node.isRequired,
};

export default AddressWrapper;
