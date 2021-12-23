# Environment Variables
The react app comes along with the Hyvä React Checkout provides some environment variables to configure the app. This becomes handy if you want to see your app in a particular currency or in a language for example.

All the env configurations can be see in your code in the file `env.example`. The variable names are straight forward. Every env variable stars with `REACT_APP_` which is a create-react-app trivia (*Oh... did I mention the react app inside the Hyvä React Checkout is basically a [create-react-app](https://github.com/facebook/create-react-app)?* 🤔 ).

## Env Configurations Available

1. `REACT_APP_BASE_URL`: Defines the base URL for the Magento backend from which the react app needs to fetch the data. There is also a setting  called `proxy` available in `package.json` file which also serves the same purpose where it won't throw any CORS errors in the browser. Comes in handy in that situation.

2. `REACT_APP_STORE_CODE`: Specifies the store code from which data needs to be collected. This data is passed in the header in all graphql queries so that store specific data will be obtained in the checkout.

3. `REACT_APP_LANGUAGE`: Specifies the locale of the react app. Based on these values translation will be applied in the react app. eg: `en_US` for English store; `de_DE` for German store etc.

4. `REACT_APP_CURRENCY_CODE`: The currency code should be used in the react app. This will be used in the `Intl.NumberFormat` to correctly format the price according to the language. eg: `EUR` for Euro, `INR` for Indian Rupee, etc.

5. `REACT_APP_CURRENCY_SYMBOL`: The currency symbol should be used in the react app. This will be used in the `Intl.NumberFormat` to correctly format the price according to the language. eg: `$` for Dollar, `€` for Euro, etc.

6. `REACT_APP_DEFAULT_COUNTRY`: Default country the react app needs to be used. This will be used in the country field in the address sections. If none specified, then default to `US`.

You should place your `.env` file at the root of the react application.

## Order of configurations considered
The highest priority is always for the environment variable configurations. The next preference will be to go for the data attribute `data-checkout_Config` where you can specify all these settings if you want. When the production build finally works in the site, this is how we are passing store specific configurations into the react app. If you need this during development, then you need to specify this in the `public/index.html` file. At last, it will use the default values in the app. Most of them you can find in the `src/config.js` file.
