import React from 'react';
import _get from 'lodash.get';
import { shape, string } from 'prop-types';

import { Checkbox } from '../../../../code/common/Form';
import { __ } from '../../../../../i18n';
import { useAppContext } from '../../../../../hooks';
import { formikDataShape } from '../../../../../utils/propTypes';

function SaveInBookCheckbox({ fields, formikData }) {
  const { isLoggedIn, customer } = useAppContext();
  const saveInAddressBook = !!_get(formikData, 'formSectionValues.saveInBook');

  if (!isLoggedIn || !customer?.hasAddress) {
    return null;
  }

  return (
    <div className="mt-4">
      <Checkbox
        name={fields.saveInBook}
        checked={saveInAddressBook}
        label={__('Save in address book')}
      />
    </div>
  );
}

SaveInBookCheckbox.propTypes = {
  formikData: formikDataShape.isRequired,
  fields: shape({ saveInBook: string }).isRequired,
};

export default SaveInBookCheckbox;
