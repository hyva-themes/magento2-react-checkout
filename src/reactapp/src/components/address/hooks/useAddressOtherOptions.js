import {
  isCartAddressValid,
  formatAddressListToCardData,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';
import useAppContext from '../../../hook/useAppContext';
import { _cleanObjByKeys, _isObjEmpty, _objToArray } from '../../../utils';

export default function useAddressOtherOptions({
  cartAddress,
  selectedAddress,
}) {
  const [{ stateList, customerAddressList }] = useAppContext();
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();

  // prepare address options from customer address list
  const customerAddrToConsider = isCartAddressValid(cartAddress)
    ? _cleanObjByKeys(customerAddressList, [selectedAddress])
    : customerAddressList;
  let addressOptions = formatAddressListToCardData(
    _objToArray(customerAddrToConsider)
  );

  // prepare address options from the local storage addresses
  if (!_isObjEmpty(mostRecentAddressList)) {
    const mostRecentAddrOptions = formatAddressListToCardData(
      _objToArray(_cleanObjByKeys(mostRecentAddressList, [selectedAddress])),
      stateList
    );
    addressOptions = [...mostRecentAddrOptions, ...addressOptions];
  }

  return addressOptions;
}
