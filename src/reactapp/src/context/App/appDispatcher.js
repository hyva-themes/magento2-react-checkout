import { fetchCountriesAction } from './countries/actions';

export default function appDispatcher(dispatch) {
  const fetchCountries = fetchCountriesAction.bind(null, dispatch);

  return {
    fetchCountries,
  };
}
