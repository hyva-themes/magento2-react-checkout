import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from 'react';
import { appReducer } from './reducers';
import { fetchCountriesAction } from './actions/app';
import * as actionStates from './actions/actionStates';

const AppContext = createContext();

const initialState = {
    countries: {
        state: actionStates.INITIAL,
        data: [],
    },
    billingOpen: true,
};

export const AppContextProvider = props => {
    const { children } = props;

    // initialize reducer with initialState { app }
    const [AppState, dispatch] = useReducer(appReducer, initialState);

    // initialize actions for this context into an API object
    const AppApi = GetAppApi(dispatch);

    /* create contextValue as an array with objects state+api.
     * State and Actions can be accessed as:
     * const [{ stateObject }, { actionName }] = use[ContextName]Context();
     * For example:
     * const [{ countries }, { fetchCountries }] = useAppContext();
     */
    const contextValue = useMemo(() => [AppState, AppApi], [AppState, AppApi]);
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

const GetAppApi = dispatch => {
    const fetchCountries = useCallback(() => fetchCountriesAction(dispatch), [
        dispatch,
    ]);

    const setBillingOpen = useCallback((isOpen) => {
        dispatch({
            type: `SET_BILLING_OPEN`,
            payload: isOpen,
        });
    }, [dispatch]);

    return useMemo(
        () => ({
            setBillingOpen,
            fetchCountries,
            dispatch,
        }),
        [fetchCountries, dispatch]
    );
};

export const useAppContext = () => useContext(AppContext);
