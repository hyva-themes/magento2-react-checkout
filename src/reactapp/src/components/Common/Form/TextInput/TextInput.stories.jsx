/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import TextInput from './TextInput';

const requiredMessage = '%1 is required';

const InputSchema = Yup.object().shape({
  validation: Yup.string().required(requiredMessage),
});

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    Story => (
      <Formik initialValues={{ text_input: '' }} validationSchema={InputSchema}>
        <Story />
      </Formik>
    ),
  ],
};

const Template = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Text Label',
  name: 'text_input',
};

export const Validation = Template.bind({});
Validation.args = {
  label: 'Field',
  name: 'validation',
  placeholder: 'Touch me please',
  required: true,
};
