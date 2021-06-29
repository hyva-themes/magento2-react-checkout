import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import LoginForm from './components/LoginForm';
import UserInfoBox from './components/UserInfoBox';
import LoginFormManager from './components/LoginFormManager';
import { __ } from '../../i18n';

const LoginMemorized = React.memo(({ formikData }) => (
  <LoginFormManager formikData={formikData}>
    <Card>
      <ToggleBox title={__('Email')} show>
        <LoginForm />
        <UserInfoBox />
      </ToggleBox>
    </Card>
  </LoginFormManager>
));

export default LoginMemorized;
