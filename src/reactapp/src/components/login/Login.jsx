import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import LoginForm from './components/LoginForm';
import LoginFormManager from './components/LoginFormManager';
import UserInfoBox from './components/UserInfoBox';
import { __ } from '../../i18n';

function Login() {
  return (
    <LoginFormManager>
      <Card>
        <ToggleBox title={__('Email')} show>
          <LoginForm />
          <UserInfoBox />
        </ToggleBox>
      </Card>
    </LoginFormManager>
  );
}

export default Login;
