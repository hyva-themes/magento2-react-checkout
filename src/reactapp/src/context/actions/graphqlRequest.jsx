import { config } from '../../config';

export const graphqlRequest = (dispatch, query, type, returnProperty) =>
    fetch(config.baseUrl + '/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'Basic YWRtaW46dGVzdA==' +
                ((config.signInToken && ', Bearer ' + config.signInToken) ||
                    ''),
        },
        credentials: 'include',
        body: JSON.stringify({
            query,
        }),
    })
        .then(response => {
            return response.json();
        })
        .then(responseAsJson => {
            const data = returnProperty(responseAsJson.data);
            // We got a valid response from the server, but it contains an error message
            if (responseAsJson.errors) {
                const messages = responseAsJson.errors.reduce(
                    (messages, error) => {
                        return [
                            ...messages,
                            {
                                type: 'warning',
                                text: error.message,
                            },
                        ];
                    },
                    []
                );
                const hideMessageAfter = 30000;
                window.dispatchMessages && window.dispatchMessages(messages, hideMessageAfter);

                return dispatch({
                    type: `${type}_ERROR`,
                    payload: responseAsJson.data,
                    errors: responseAsJson.errors,
                    data,
                });
            }

            return dispatch({
                type: `${type}_SUCCESS`,
                payload: responseAsJson.data,
                data,
            });
        })
        .catch(exception => {
            // The server did not return a valid response
            window.dispatchMessages && window.dispatchMessages([
                {
                    type: 'error',
                    text: exception.message,
                },
            ]);
            console.error(exception);
            return dispatch({
                type: `${type}_ERROR`,
                payload: {},
                errors: [exception.message],
            });
        });
