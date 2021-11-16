import { object as YupObject } from 'yup';

export default function useTextInputBlurAction({
  formikData,
  submitHandler,
  validationSchema,
  additionalValidation,
}) {
  const { formSectionValues } = formikData || {};

  return (event) => {
    event.preventDefault();

    const validationRules = YupObject().shape(validationSchema);
    validationRules.isValid(formSectionValues).then((valid) => {
      if (valid) {
        if (additionalValidation && !additionalValidation()) {
          return false;
        }

        submitHandler();
      }

      return valid;
    });
  };
}
