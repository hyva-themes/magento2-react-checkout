import React, { useMemo } from 'react';

import LoginMemorized from './LoginMemorized';
import { LOGIN_FORM } from '../../config';
import useFormikMemorizer from '../../hook/useFormikMemorizer';

/**
 * Entry point of login form Section
 *
 * We are preparing any data related to formik state here and memorizing it.
 * After that, these info will be fed to all other child components.
 *
 * So child components DO NOT access formik states using `useFormikContext` hook
 * inside them unless it is totally unavoidable.
 *
 * Using useFormikContext hook render the component almost always. So use the
 * memorized data here inside the child components.
 */
function Login() {
  const formikSectionData = useFormikMemorizer(LOGIN_FORM);

  const loginFormikData = useMemo(
    () => ({
      ...formikSectionData,
      loginFormValues: formikSectionData.formSectionValues,
      isLoginFormTouched: formikSectionData.isFormSectionTouched,
    }),
    [formikSectionData]
  );

  return <LoginMemorized formikData={loginFormikData} />;
}

export default Login;
