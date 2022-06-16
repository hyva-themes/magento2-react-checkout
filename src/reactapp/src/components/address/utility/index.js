import { get as _get } from 'lodash-es';

import {
  _keys,
  _isObjEmpty,
  _objToArray,
  _cleanObjByKeys,
} from '../../../utils';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  formatAddressListToCardData,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';

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

export function prepareMostRecentAddressOptions(stateList) {
  const mostRecentAddressList = LocalStorage.getMostRecentlyUsedAddressList();

  if (_isObjEmpty(mostRecentAddressList)) {
    return [];
  }

  const mostRecentAddrOptions = formatAddressListToCardData(
    _objToArray(mostRecentAddressList),
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

export function computeCanHideOtherAddressSection(
  isLoggedIn,
  selectedAddress,
  cartShippingAddress,
  customerAddressList
) {
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const mostRecentAddressList = LocalStorage.getMostRecentlyUsedAddressList();
  const customerHoldsAddress = _keys(customerAddressList).length;
  const mostRecentAddressExists = _keys(mostRecentAddressList).length;
  let hideOtherAddrSection =
    isLoggedIn && !customerHoldsAddress && !mostRecentAddressExists;

  if (customerHoldsAddress || mostRecentAddressExists) {
    if (customerHoldsAddress && mostRecentAddressExists) {
      // more than one extra address present; so show "other addresses" section.
      hideOtherAddrSection = false;
    } else if (isCartShippingAddressValid) {
      // so extra address is present and a cart address also exists, so deciding
      // to show other addresses section.
      hideOtherAddrSection = false;

      if (
        customerHoldsAddress === 1 &&
        isValidCustomerAddressId(selectedAddress)
      ) {
        // this means the cart address is the only customer address itself.
        // so need to hide other address section
        hideOtherAddrSection = true;
      }
    }
  }

  return hideOtherAddrSection;
}
