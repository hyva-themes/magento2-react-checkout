import _get from 'lodash.get';
import { _keys } from '.';

export function scrollToElement(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

export function focusOnFormErrorElement(formId, formSectionErrors) {
  const firstErrorKey = _get(_keys(formSectionErrors), '0');
  const firstErrorElementId = `${formId}.${firstErrorKey}`;
  const element = document.getElementById(firstErrorElementId);

  if (element) {
    element.focus();
    scrollToElement(formId);
  }
}

export function prepareFormSectionErrorMessage(formId, formSectionErrors) {
  return _keys(formSectionErrors)
    .map(field => formSectionErrors[field].replace('%1', field))
    .join('; ');
}
