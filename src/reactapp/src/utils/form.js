import { get as _get, set as _set } from 'lodash-es';

import { __ } from '../i18n';
import { _emptyFunc, _isArray, _keys, _ucFirst } from './index';

export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

export function focusOnFormErrorElement(formId, errors, actions = {}) {
  const errorFormIds = _keys(errors);
  // length > 1 indicates, passed error object is global formik.errors
  const formSectionErrors = errorFormIds?.length > 1 ? errors[formId] : errors;
  const formSectionErrorFields = _keys(formSectionErrors);
  const firstErrorKey = _get(formSectionErrorFields, '0');
  const firstErrorElementId = `${formId}.${firstErrorKey}`;
  const element = document.getElementById(firstErrorElementId);

  if (!actions.setFieldTouched) {
    _set(actions, 'setFieldTouched', _emptyFunc());
  }

  formSectionErrorFields.forEach((fieldName) => {
    // There can be array values. so errors will be in array. so looping through
    // array errors to touch those inputs as well.
    if (_isArray(formSectionErrors[fieldName])) {
      formSectionErrors[fieldName].forEach((errorValue, fieldKey) =>
        actions.setFieldTouched(`${formId}.${fieldName}.${fieldKey}`)
      );
    } else {
      actions.setFieldTouched(`${formId}.${fieldName}`);
    }
  });

  if (element) {
    element.focus();
    scrollToElement(formId);
  }
}

export function prepareFormSectionErrorMessage(
  formId,
  formSectionErrors,
  setFieldTouched
) {
  // errors list can contain inner arrays; for example streets field
  return _keys(formSectionErrors)
    .reduce((errorMessages, field) => {
      if (_isArray(formSectionErrors[field])) {
        _keys(formSectionErrors[field]).forEach((innerField) => {
          errorMessages.push(
            formSectionErrors[field][innerField].replace(
              '%1',
              __(_ucFirst(field))
            )
          );
          setFieldTouched(`${formId}.${field}.${innerField}`, true);
        });
      } else {
        errorMessages.push(
          formSectionErrors[field].replace('%1', __(_ucFirst(field)))
        );
        setFieldTouched(`${formId}.${field}`, true);
      }

      return errorMessages;
    }, [])
    .join('; ');
}
