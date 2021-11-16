import React from 'react';

import LoginMemorized from './LoginMemorized';
import { useLoginMemorizer } from '../../../code/login/hooks';

function Login() {
  const loginFormikData = useLoginMemorizer();

  return <LoginMemorized formikData={loginFormikData} />;
}

export default Login;
