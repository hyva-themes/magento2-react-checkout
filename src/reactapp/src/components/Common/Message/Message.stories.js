/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import AppContext from '../../../context/App/AppContext';
import useAppContext from '../../../hook/useAppContext';

import Message from './Message';

function MessageSetter({ msgType, ...props }) {
  const [, { setSuccessMessage, setErrorMessage }] = useAppContext();

  useEffect(() => {
    if (msgType === 'success') {
      setSuccessMessage('Success Message');
    } else if (msgType === 'error') {
      setErrorMessage('Error Message');
    }
  }, [setSuccessMessage, setErrorMessage, msgType]);

  return <Message {...props} />;
}

export default {
  title: 'Common/Message',
  component: Message,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => (
  <AppContext.Provider>
    <MessageSetter {...args} />
  </AppContext.Provider>
);

export const SuccessMessage = Template.bind({});
SuccessMessage.args = {
  msgType: 'success',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  msgType: 'error',
};
