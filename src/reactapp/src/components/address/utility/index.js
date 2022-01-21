import _get from 'lodash.get';

import {
  isCartAddressValid,
  formatAddressListToCardData,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';
import { _cleanObjByKeys, _isObjEmpty, _objToArray } from '../../../utils';

function sortByItemLabel(item1, item2) {
  return item1.label.localeCompare(item2.label);
}

export function prepareCountryOptions(countryList) {
  // this will make sure there will be always a unique country id; avoid duplicates if any
  // also it will make sure it will avoid empty country entries
  const countryListObj = countryList.reduce((accumulator, country) => {
    if (country.id && country.name) {
      accumulator[country.id] = { value: country.id, label: country.name };
    }
    return accumulator;
  }, {});

  // sorting by label
  return _objToArray(countryListObj).sort(sortByItemLabel);
}

export function prepareCountryStateOptions(stateList, countrySelected) {
  // remove empty entries; avoid duplicate entries if any
  const stateListObj = _get(stateList, countrySelected, []).reduce(
    (accumulator, state) => {
      if (state.code && state.name) {
        accumulator[state.code] = { value: state.code, label: state.name };
      }
      return accumulator;
    },
    {}
  );

  // performing sort
  return _objToArray(stateListObj).sort(sortByItemLabel);
}

export function prepareMostRecentAddressOptions(
  stateList,
  selectedAddress = ''
) {
  const mostRecentAddressList = LocalStorage.getMostRecentlyUsedAddressList();

  if (_isObjEmpty(mostRecentAddressList)) {
    return [];
  }

  const mostRecentAddrOptions = formatAddressListToCardData(
    _objToArray(_cleanObjByKeys(mostRecentAddressList, [selectedAddress])),
    stateList
  );

  return mostRecentAddrOptions;
}

export function prepareCustomerAddressOptions({
  cartAddress,
  selectedAddress,
  customerAddressList,
}) {
  // prepare address options from customer address list
  const customerAddrToConsider = isCartAddressValid(cartAddress)
    ? _cleanObjByKeys(customerAddressList, [selectedAddress])
    : customerAddressList;

  const customerAddressOptions = formatAddressListToCardData(
    _objToArray(customerAddrToConsider)
  );

  return customerAddressOptions;
}

export function canAddressOptionRemoved(addressId, customerAddressList) {
  const billingIdInStorage = LocalStorage.getCustomerBillingAddressId();
  const shippingIdInStorage = LocalStorage.getCustomerShippingAddressId();

  if ([billingIdInStorage, shippingIdInStorage].includes(addressId)) {
    return false;
  }

  return !customerAddressList[addressId];
}
