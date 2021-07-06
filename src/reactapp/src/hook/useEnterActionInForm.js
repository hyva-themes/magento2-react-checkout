import _get from 'lodash.get';
import { object as YupObject } from 'yup';

export default function useEnterActionInForm({
  formikData,
  submitHandler,
  validationSchema,
}) {
  const { formSectionValues } = formikData || {};

  return event => {
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();

    const {
      target,
      target: {
        form: { elements: formElements },
      },
    } = event;
    const currentTargetIndex = [...formElements].indexOf(target);
    const nextFormElement = _get(formElements, currentTargetIndex + 1);

    // focusing on button element seems to trigger button click event
    if (nextFormElement && nextFormElement.tagName.toLowerCase() !== 'button') {
      nextFormElement.focus();
    }

    const validationRules = YupObject().shape(validationSchema);
    validationRules.isValid(formSectionValues).then(valid => {
      if (valid) {
        submitHandler();
      }
    });
  };
}
