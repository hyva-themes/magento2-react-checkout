import LocalStorage from '../../../../utils/localStorage';

export function saveCustomerAddressToLocalStorage(addressId, isBillingSame) {
  LocalStorage.saveBillingSameAsBilling(isBillingSame);
  LocalStorage.saveCustomerBillingAddressId(addressId);

  if (isBillingSame) {
    LocalStorage.saveCustomerBillingAddressId(addressId);
  }
}
