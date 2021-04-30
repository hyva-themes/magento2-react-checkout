import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import LoginForm from './components/LoginForm';
import LoginFormManager from './components/LoginFormManager';
import UserInfoBox from './components/UserInfoBox';

function Login() {
  return (
    <LoginFormManager>
      <Card bg="dark">
        <ToggleBox title="Email" show>
          <LoginForm />
          <UserInfoBox />
        </ToggleBox>
      </Card>
    </LoginFormManager>
  );
}

export default Login;
