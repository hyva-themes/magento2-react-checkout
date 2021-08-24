import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import LoginForm from './components/LoginForm';
import UserInfoBox from './components/UserInfoBox';
import LoginFormManager from './components/LoginFormManager';
import { __mt } from '../../i18n';
import { formikDataShape } from '../../utils/propTypes';

const LoginMemorized = React.memo(({ formikData }) => (
  <LoginFormManager formikData={formikData}>
    <Card>
      <ToggleBox title={__mt('Email')} show>
        <LoginForm />
        <UserInfoBox />
      </ToggleBox>
    </Card>
  </LoginFormManager>
));

LoginMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default LoginMemorized;
