/* eslint-disable react/jsx-props-no-spreading */
import { Formik } from 'formik';
import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Formik initialValues={{ check: false }}>
        <Story />
      </Formik>
    ),
  ],
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Use me',
  name: 'check',
};
