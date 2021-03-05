import { addCountryStateList, setCountryList } from './countries/reducers';
import { ADD_COUNTRY_STATES, SET_COUNTRY_LIST } from './countries/type';
import { setCustomerAddressInfo, setCustomerInfo } from './customer/reducers';
import { SET_CUSTOMER_ADDRESS_INFO, SET_CUSTOMER_INFO } from './customer/types';
import { setPageLoader, setPageMessage } from './page/reducers';
import { SET_PAGE_LOADER, SET_PAGE_MESSAGE } from './page/types';

const actions = {
  [SET_COUNTRY_LIST]: setCountryList,
  [SET_PAGE_LOADER]: setPageLoader,
  [ADD_COUNTRY_STATES]: addCountryStateList,
  [SET_PAGE_MESSAGE]: setPageMessage,
  [SET_CUSTOMER_INFO]: setCustomerInfo,
  [SET_CUSTOMER_ADDRESS_INFO]: setCustomerAddressInfo,
};

export default function appReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
