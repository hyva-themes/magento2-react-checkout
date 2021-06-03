import {
  setErrorMessageAction,
  setMessageAction,
  setPageLoaderAction,
  setSuccessMessageAction,
} from './page/actions';
import {
  fetchCountriesAction,
  fetchCountryStatesAction,
} from './countries/actions';
import {
  ajaxLoginAction,
  getCustomerAddressListAction,
  getCustomerInfoAction,
  setLoggedInStatusAction,
  sigInCustomerAction,
  updateCustomerAddressAction,
} from './customer/actions';

const dispatchMapper = {
  fetchCountries: fetchCountriesAction,
  setPageLoader: setPageLoaderAction,
  fetchCountryStates: fetchCountryStatesAction,
  signInCustomer: sigInCustomerAction,
  ajaxLogin: ajaxLoginAction,
  setSuccessMessage: setSuccessMessageAction,
  setErrorMessage: setErrorMessageAction,
  setMessage: setMessageAction,
  getCustomerInfo: getCustomerInfoAction,
  getCustomerAddressList: getCustomerAddressListAction,
  updateCustomerAddress: updateCustomerAddressAction,
  setLoggedInStatus: setLoggedInStatusAction,
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
