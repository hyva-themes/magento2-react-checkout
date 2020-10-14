import * as actionStates from '../actions/actionStates';
import {countriesGqlToFormik} from "../../utils/countriesGqlToFormik";

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BILLING_OPEN':
            return {
                ...state,
                billingOpen: action.payload
            }
        case 'FETCH_COUNTRIES_SUCCESS':
            return {
                ...state,
                errors: false,
                countries: {
                    state: actionStates.SUCCESS,
                    data: countriesGqlToFormik(action.data),
                },
            };
        case 'FETCH_COUNTRIES_ERROR':
            const countries = action.data
                ? { state: actionStates.FAILED, data: countriesGqlToFormik(action.data) }
                : { ...state.countries };
            return {
                ...state,
                ...countries,
                errors: action.errors,
            };
        default:
            return state;
    }
};
