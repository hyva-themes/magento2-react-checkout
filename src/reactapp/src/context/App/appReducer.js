import {
  setCustomerInfo,
  setCustomerAddressInfo,
  updateCustomerAddressReducer,
  setCustomerLoggedInStatusReducer,
} from './customer/reducers';
import {
  SET_CUSTOMER_INFO,
  UPDATE_CUSTOMER_ADDRESS,
  SET_CUSTOMER_ADDRESS_INFO,
  UPDATE_CUSTOMER_LOGGEDIN_STATUS,
} from './customer/types';
import { AGGREGATED_APP_DATA } from './aggregated/types';
import { setAggregatedData } from './aggregated/reducers';
import { setPageLoader, setPageMessage } from './page/reducers';
import { SET_PAGE_LOADER, SET_PAGE_MESSAGE } from './page/types';
import { SET_CHECKOUT_AGREEMENTS } from './checkoutAgreements/types';
import { setCheckoutAgreements } from './checkoutAgreements/reducers';
import { ADD_COUNTRY_STATES, SET_COUNTRY_LIST } from './countries/type';
import { addCountryStateList, setCountryList } from './countries/reducers';

const actions = {
  [SET_PAGE_LOADER]: setPageLoader,
  [SET_COUNTRY_LIST]: setCountryList,
  [SET_PAGE_MESSAGE]: setPageMessage,
  [SET_CUSTOMER_INFO]: setCustomerInfo,
  [AGGREGATED_APP_DATA]: setAggregatedData,
  [ADD_COUNTRY_STATES]: addCountryStateList,
  [SET_CHECKOUT_AGREEMENTS]: setCheckoutAgreements,
  [SET_CUSTOMER_ADDRESS_INFO]: setCustomerAddressInfo,
  [UPDATE_CUSTOMER_ADDRESS]: updateCustomerAddressReducer,
  [UPDATE_CUSTOMER_LOGGEDIN_STATUS]: setCustomerLoggedInStatusReducer,
};

export default function appReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
