import React from 'react';
import { bool, func, shape } from 'prop-types';
import { useFormikContext } from 'formik';

import Button from '../../common/Button';
import { __ } from '../../../i18n';

function SaveButton({ actions, isFormValid }) {
  const { values } = useFormikContext();

  return (
    <Button
      click={() => actions.saveAddress(values)}
      variant="success"
      disable={!isFormValid}
    >
      {__('save')}
    </Button>
  );
}

SaveButton.propTypes = {
  isFormValid: bool,
  actions: shape({
    saveAddress: func,
  }),
};

SaveButton.defaultProps = {
  isFormValid: false,
  actions: {
    saveAddress: () => {},
  },
};

export default SaveButton;
