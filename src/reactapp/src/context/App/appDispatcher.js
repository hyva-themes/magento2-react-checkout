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
  checkEmailAction,
  setLoggedInStatusAction,
  updateCustomerAddressAction,
  getCustomerAddressListAction,
} from './customer/actions';
import { storeAggregatedAppStatesAction } from './aggregated/actions';
import { getCheckoutAgreementsAction } from './checkoutAgreements/actions';

const dispatchMapper = {
  ajaxLogin: ajaxLoginAction,
  setMessage: setMessageAction,
  setPageLoader: setPageLoaderAction,
  signInCustomer: sigInCustomerAction,
  fetchCountries: fetchCountriesAction,
  setErrorMessage: setErrorMessageAction,
  getCustomerInfo: getCustomerInfoAction,
  checkEmail: checkEmailAction,
  setSuccessMessage: setSuccessMessageAction,
  setLoggedInStatus: setLoggedInStatusAction,
  fetchCountryStates: fetchCountryStatesAction,
  updateCustomerAddress: updateCustomerAddressAction,
  getCheckoutAgreements: getCheckoutAgreementsAction,
  getCustomerAddressList: getCustomerAddressListAction,
  storeAggregatedAppStates: storeAggregatedAppStatesAction,
};

export default function appDispatcher(dispatch) {
  const dispatchers = { dispatch };

  Object.keys(dispatchMapper).forEach((dispatchName) => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}
