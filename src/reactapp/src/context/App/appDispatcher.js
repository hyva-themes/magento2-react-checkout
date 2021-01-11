import { setPageLoaderAction } from './page/actions';
import {
  fetchCountriesAction,
  fetchCountryStatesAction,
} from './countries/actions';

export default function appDispatcher(dispatch) {
  const fetchCountries = fetchCountriesAction.bind(null, dispatch);
  const setPageLoader = setPageLoaderAction.bind(null, dispatch);
  const fetchCountryStates = fetchCountryStatesAction.bind(null, dispatch);

  return {
    fetchCountries,
    setPageLoader,
    fetchCountryStates,
  };
}
