import {
  setErrroMessageAction,
  setMessageAction,
  setPageLoaderAction,
  setSuccessMessageAction,
} from './page/actions';
import {
  fetchCountriesAction,
  fetchCountryStatesAction,
} from './countries/actions';
import {
  getCustomerAddressListAction,
  getCustomerInfoAction,
  sigInCustomerAction,
  updateCustomerAddressAction,
} from './customer/actions';

const dispatchMapper = {
  fetchCountries: fetchCountriesAction,
  setPageLoader: setPageLoaderAction,
  fetchCountryStates: fetchCountryStatesAction,
  signInCustomer: sigInCustomerAction,
  setSuccessMessage: setSuccessMessageAction,
  setErrorMessage: setErrroMessageAction,
  setMessage: setMessageAction,
  getCustomerInfo: getCustomerInfoAction,
  getCustomerAddressList: getCustomerAddressListAction,
  updateCustomerAddress: updateCustomerAddressAction,
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
