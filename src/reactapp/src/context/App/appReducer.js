import { addCountryStateList, setCountryList } from './countries/reducers';
import { ADD_COUNTRY_STATES, SET_COUNTRY_LIST } from './countries/type';
import { setPageLoader } from './page/reducers';
import { SET_PAGE_LOADER } from './page/types';

const actions = {
  [SET_COUNTRY_LIST]: setCountryList,
  [SET_PAGE_LOADER]: setPageLoader,
  [ADD_COUNTRY_STATES]: addCountryStateList,
};

export default function appReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
