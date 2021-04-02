import _get from 'lodash.get';
import { _objToArray } from '../../../../utils';

function sortByItemLabel(item1, item2) {
  return item1.label.localeCompare(item2.label);
}

export function prepareCountryOptions(countryList) {
  // this will make sure there will be always a unique country id; avoid duplicates if any
  // also it will make sure it will avoid empty country entries
  const countryListObj = countryList.reduce((countries, country) => {
    if (country.id && country.name) {
      // eslint-disable-next-line no-param-reassign
      countries[country.id] = { value: country.id, label: country.name };
    }
    return countries;
  }, {});

  // sorting by label
  return _objToArray(countryListObj).sort(sortByItemLabel);
}

export function prepareCountryStateOptions(stateList, countrySelected) {
  // remove empty entries; avoid duplicate entries if any
  const stateListObj = _get(stateList, countrySelected, []).reduce(
    (states, state) => {
      if (state.code && state.name) {
        // eslint-disable-next-line no-param-reassign
        states[state.code] = { value: state.code, label: state.name };
      }
      return states;
    },
    {}
  );

  // performing sort
  return _objToArray(stateListObj).sort(sortByItemLabel);
}
