/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik } from 'formik';

import SelectInput from './SelectInput';

export default {
  title: 'Form/SelectInput',
  component: SelectInput,
  decorators: [
    (Story) => (
      <Formik initialValues={{ select: '' }}>
        <Story />
      </Formik>
    ),
  ],
};

const Template = (args) => <SelectInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select Label',
  name: 'select',
  options: [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ],
};
