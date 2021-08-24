import React from 'react';
import { bool, func, shape } from 'prop-types';

import Button from '../../common/Button';
import { __mt } from '../../../i18n';

function SaveButton({ actions, isFormValid }) {
  return (
    <Button
      variant="primary"
      disable={!isFormValid}
      click={actions.saveAddress}
    >
      {__mt('Save')}
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
