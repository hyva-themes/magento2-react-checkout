import { _isObjEmpty } from '../../../../../utils';
import useAddressWrapper from './useAddressWrapper';
import { prepareCustomerAddressOptions } from '../utility';
import LocalStorage from '../../../../../utils/localStorage';
import useAppContext from '../../../../../hooks/useAppContext';

export default function useAddressOtherOptions({
  cartAddress,
  selectedAddress,
}) {
  const { customerAddressList } = useAppContext();
  const { mostRecentAddressOptions } = useAddressWrapper();
  const mostRecentAddressList = LocalStorage.getMostRecentlyUsedAddressList();

  let addressOptions = prepareCustomerAddressOptions({
    cartAddress,
    selectedAddress,
    customerAddressList,
  });

  // prepare address options from the local storage addresses
  if (!_isObjEmpty(mostRecentAddressList)) {
    addressOptions = [
      ...mostRecentAddressOptions.filter(({ id }) => id !== selectedAddress),
      ...addressOptions,
    ];
  }

  return addressOptions;
}
