/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'default button',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'success button',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'success button',
};
