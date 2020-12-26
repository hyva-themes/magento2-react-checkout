import React from 'react';
import { FormikProvider, Form } from 'formik';
import { config } from '../../config';

import { useFormikContext } from '../../context/Formik';
import { useCartContext } from '../../context/Cart';
import TextInput from '../Common/Form/TextInput';

export const GuestEmail = () => {
  const [{ EmailForm }] = useFormikContext();
  const [{ cart }, { setEmailOnGuestCart }] = useCartContext();

  const { email: inputEmail } = EmailForm.values;

  const changeEmailHandler = () => {
    if ((cart.email || '') !== inputEmail && inputEmail !== '') {
      setEmailOnGuestCart(inputEmail);
    }
  };

  if (config.signInToken) {
    return '';
  }
  return (
    <div className="border-t py-4">
      <header className="flex justify-between items-center cursor-pointer select-none">
        <span className="text-indigo font-thin text-xl">Email</span>
      </header>

      <div className="py-2">
        <FormikProvider value={EmailForm}>
          <Form>
            <TextInput
              label="E-mail"
              name="email"
              placeholder="john.doe@gmail.com"
              required
              handleBlur={changeEmailHandler}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  changeEmailHandler();
                }
              }}
            />
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};
