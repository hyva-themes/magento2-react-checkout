import { setCountryList } from './countries/reducers';
import { SET_COUNTRY_LIST } from './countries/type';

const actions = {
  [SET_COUNTRY_LIST]: setCountryList,
};

export default function appReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
