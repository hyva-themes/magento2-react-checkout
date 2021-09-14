# React Checkout

Code repo containing the Magento 2 React Checkout module

## How To Start App

1. cd into the `<project_root_dir>/src/reactapp`
2. perform `npm i` for the first time
3. run `npm start` which will open the application in the url `http://localhost:3000`
4. It will prompt you to provide a quote id. Provide a valid quote id in the prompt input box
5. You will see the checkout. Enjoy!!!

## Magento 2 backend

By default, it will be using Hyva backend (https://hyva.io) as the Magento 2 backend if you didn't specify the backend via environment file (.env)

If you want to use a different backend, specify that in the environment file as shown below

```
REACT_APP_BASE_URL=http://test.com
```
