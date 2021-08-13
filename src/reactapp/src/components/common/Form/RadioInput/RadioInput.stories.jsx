/* eslint-disable react/jsx-props-no-spreading */
import { Formik } from 'formik';
import React from 'react';

import RadioInput from './RadioInput';

export default {
  title: 'Form/Checkbox',
  component: RadioInput,
  decorators: [
    (Story) => (
      <Formik initialValues={{ check: false }}>
        <Story />
      </Formik>
    ),
  ],
};

const Template = (args) => <RadioInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Use me',
  name: 'check',
};
