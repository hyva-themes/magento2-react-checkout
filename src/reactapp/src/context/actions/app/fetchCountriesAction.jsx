import { getCountriesQuery } from '../../graphql/app/getCountriesQuery';
import { graphqlRequest } from '../graphqlRequest';

export const fetchCountriesAction = async dispatch => {
    const query = getCountriesQuery;
    const type = 'FETCH_COUNTRIES';
    const returnData = data =>
        data.countries;

    await graphqlRequest(dispatch, query, type, returnData);
};
