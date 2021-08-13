/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Card from './Card';

export default {
  title: 'Common/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  bg: '',
  classes: '',
  children: 'Default Card',
};

export const Dark = Template.bind({});
Dark.args = {
  bg: 'dark',
  classes: '',
  children: 'Dark Card',
};
