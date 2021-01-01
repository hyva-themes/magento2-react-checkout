import React, { useContext } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { GuestEmailFormContext } from '../../../context/Form';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import TextInput from '../../Common/Form/TextInput';
import ToggleBox from '../../Common/ToggleBox';

function GuestEmail() {
  const {
    isFormValid,
    editMode,
    fields,
    handleFocus,
    setFormToEditMode,
    submitHandler,
  } = useContext(GuestEmailFormContext);
  const { values } = useFormikContext();

  return (
    <Card bg="dark">
      <ToggleBox title="Email" show>
        {editMode ? (
          <>
            <div className="py-2">
              <TextInput
                label="E-mail"
                name={fields.email}
                placeholder="john.doe@gmail.com"
                required
                onFocus={handleFocus}
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                click={submitHandler}
                variant="success"
                disable={isFormValid}
              >
                Use me
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="py-2">
              <span className="flex items-center justify-center">
                {_get(values, fields.email)}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <Button click={setFormToEditMode} variant="warning">
                EDIT ME
              </Button>
            </div>
          </>
        )}
      </ToggleBox>
    </Card>
  );
}

export default GuestEmail;
