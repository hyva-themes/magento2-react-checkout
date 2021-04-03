import LocalStorage from '../../utils/localStorage';

const initialState = {
  pageLoader: false,
  countryList: [],
  countriesLoaded: [],
  stateList: {},
  message: false,
  isLoggedIn: !!LocalStorage.getCustomerToken(),
  customer: {},
  customerAddressList: {},
  defaultBillingAddress: '',
  defaultShippingAddress: '',
};

export default initialState;
