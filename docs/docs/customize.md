# How To Customize Hyva Checkout
Hyva checkout is a Magento 2 module which holds a react app inside it. So when you want
to customize the checkout, you need to work with the react app embedded inside the module.

## Where is the react app
You can find the react app at `src/reactapp`.

## Setting up react app

1. cd into the react application

        cd src/reactapp

2. install the packages

        npm install

3. Configure your Magento 2 backend site.

    There is two ways you can do this:

    **3.a** - The cleanest approach is here. create `.env` file in `src/reactapp` directory and specify your site as shown below

        REACT_APP_BASE_URL=http://your-m2-site.com

    **3.b** - A hacky trick would be specify your site as your `proxy` in the `package.json`. There is
          already an entry there. Replace it with yours

        "proxy": "http://your-m2-site.com",

    Use only one option above. Don't do both

## Start App

In order to start the application

    npm start

The app is now available at `http://localhost:3000`

As soon as the react app kick start, it will show a prompt box to input the cart id. Well,
without the a valid cart, the checkout page is useless.

![Cart Id Prompt Box](./assets/img/cart_id_prompt_box.png "Prompt box showing to input the cart id")

So provide a valid cart id and then you are good to go.
