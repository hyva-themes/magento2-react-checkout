import {
  setMessageAction,
  setPageLoaderAction,
  setErrorMessageAction,
  setSuccessMessageAction,
} from './page/actions';
import {
  fetchCountriesAction,
  fetchCountryStatesAction,
} from './countries/actions';
import {
  ajaxLoginAction,
  sigInCustomerAction,
  getCustomerInfoAction,
  setLoggedInStatusAction,
  updateCustomerAddressAction,
  getCustomerAddressListAction,
} from './customer/actions';
import { getCheckoutAgreementsAction } from './checkoutAgreements/actions';

const dispatchMapper = {
  ajaxLogin: ajaxLoginAction,
  setMessage: setMessageAction,
  setPageLoader: setPageLoaderAction,
  signInCustomer: sigInCustomerAction,
  fetchCountries: fetchCountriesAction,
  setErrorMessage: setErrorMessageAction,
  getCustomerInfo: getCustomerInfoAction,
  setSuccessMessage: setSuccessMessageAction,
  setLoggedInStatus: setLoggedInStatusAction,
  fetchCountryStates: fetchCountryStatesAction,
  updateCustomerAddress: updateCustomerAddressAction,
  getCheckoutAgreements: getCheckoutAgreementsAction,
  getCustomerAddressList: getCustomerAddressListAction,
};

export default function appDispatcher(dispatch) {
  const dispatchers = {};

  Object.keys(dispatchMapper).forEach(dispatchName => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}
