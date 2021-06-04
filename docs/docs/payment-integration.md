# Payment Integration
In Hyvä Checkout, the payment options will be shown as radio inputs by default. You can choose the option and place the order, and everything works out of the box.

But showing just a radio input box and allowing you to select/deselect them is not what you needed for all payment options. Some payment methods need different behavior. Also, some payment methods need a separate flow when we perform the "place order" action. To help you out in such cases, Hyvä Checkout already possesses some superpowers, which we will see in a short time.

## Payment Supports
Payment methods integration is in progress. We don't have any plans to keep payment components as part of Hyvä Checkout. But we will be maintaining separate payment repositories which will hold the custom payment method components which you can use with Hyvä Checkout seamlessly.

Below, we are listing the payment repositories, and each repository will have specific instructions about its usage.

- [hyva-themes/magento2-hyva-checkout-payone](https://github.com/hyva-themes/magento2-hyva-checkout-payone)
- [hyva-themes/magento2-hyva-checkout-paypal-express](https://github.com/hyva-themes/magento2-hyva-checkout-paypal-express)

We are open to contributions here as the payment options available out there are many, and you all can help out to grow the above list.
_____________
## Payment Configurations and Its Usage
Depending upon the payment methods, you may have some special configuration settings in your store. Usually, you do this under `Stores > Configuration`. If you are familiar with the default Magento 2 checkout page, then you may know that Magento 2 passes this configuration via a global variable which you can find at `window.checkoutConfig`.

To collect these checkout configurations, we have a ViewModel (`Hyva\Checkout\ViewModel\CheckoutConfigProvider`) available in the module and we are passing this configuration through the root DOM element.

See the layout file where we injecting the view model.

File: `src/view/frontend/layout/hyvacheckout_checkout_index.xml`

```
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="1column" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    ...
    <body>
        <referenceContainer name="content">
            <block name="checkout.container" cacheable="false" template="Hyva_Checkout::react-container.phtml">
                <arguments>
                    ...
                    <argument name="checkout_config_provider" xsi:type="object">Hyva\Checkout\ViewModel\CheckoutConfigProvider</argument>
                </arguments>
            </block>
        </referenceContainer>
        ...
    </body>
</page>
```


See the data attribute `data-payment` through which we are passing this configuration.

    File: `src/view/frontend/templates/react-container.phtml`


        <?php
        ...
        /** @var \Magento\Framework\Escaper $escaper */
        /** @var \Hyva\Checkout\ViewModel\CheckoutConfigProvider $configProvider */
        $configProvider = $block->getCheckoutConfigProvider();
        ...
        ?>
        <div
            id="react-checkout"
            ...
            data-payment="<?= $escaper->escapeHtmlAttr($configProvider->getConfig())  ?>"
        >
        ...
        </div>


Now the react app has access to the payment configurations, and it can be used in the application according to your need.

## Custom Payment Renderer
As already stated, by default, all payment methods appear as a radio input. But Hyvä Checkout allows using a custom renderer for any payment methods.

You can either develop your own custom payment renderer within the `reactapp`or use an existing custom payment renderer repo within Hyvä Checkout.

#### How To Create My Own Custom Payment Renderer
Lets say we want to create a custom payment renderer for paypal-express solution. This is how you do this in Hyvä Checkout.

Create following folders/ files in `src/reactapp/src/paymentMethods`

```
src/reactapp/src/paymentMethods/
|
|____paypalExpress/
    |
    |____renderers.js
    |
    |____src/components/PaypalExpress.jsx
    |
    |____i18n/en_US.json
```
You need at least two files in order to properly create a custom payment renderer.

1. The custom payment render component. This is a react component. This react component will be used to render the payment method. In the shown example `src/components/PaypalExpress.jsx` is what out custom payment renderer component.
2. `renderers.js` file that configures the payment renderer component. The content of this file somewhat looks like below

    File: `src/reactapp/src/paymentMethods/paypalExpress/renderers.js`

        import PaypalExpress from './src/components/PaypalExpress';

        export default {
          paypal_express: PaypalExpress,
        };

    So it exports an object. Each key specifies the payment method code (`paypal_express`) and its value is the custom payment render component (`PaypalExpress`).

3. If your custom payment method defines any translatable labels within it, then we need to add them in the `i18n/[locale].json` files. In the given example, `i18n/en_US.json` represents this.


#### How To Use A Custom Payment Renderer Repo With Hyvä Checkout

You need to specify your custom payment repo in the `package.json` file as shown below:

File: `src/reactapp/package.json`
```
"config": {
    "paymentMethodsRepo": {
        "payone": "git@github.com:hyva-themes/magento2-hyva-checkout-payone.git"
    }
},
```
As you can see above, we are configuring `payone` custom payment solution under `config.paymentMethodsRepo`. With this change in your `package.json` and if you run `npm install`, then your repo will be cloned into `src/reactapp/src/paymentMethods` directory and properly configured over there.

### How Custom Payment Renderer Works
It all starts from the react component `<PaymentMethod />`. This component is responsible for showing the entire payment method section. See its implementation

File: `src/reactapp/src/components/paymentMethod/PaymentMethod.jsx`
```
import React, { useEffect, useState } from 'react';
...
import getCustomRenderers from '../../paymentMethods/customRenderers';

function PaymentMethod() {
  const [renderers, setRenderers] = useState({});
  ...
  // collect custom renderers from the custom payment methods installed.
  useEffect(() => {
    (async () => {
      const availableRenderers = await getCustomRenderers();
      setRenderers(availableRenderers);
    })();
  }, []);

  return (
    <PaymentMethodFormManager>
      <Card>
        <Header>{__('Payment Methods')}</Header>
        ...
        <PaymentMethodList methodRenderers={renderers} />
        ...
      </Card>
    </PaymentMethodFormManager>
  );
}

export default PaymentMethod;
```
Here `renderers` state holds the custom payment renderers. This value is an object where its keys will be payment method code and values will be renderer component. `renderers` state is then passing to `<PaymentMethodList />` component. This component will loop through each payment method and if a custom payment renderer defined for a payment, then it will use that custom payment renderer for that payment method; else, it will render the payment method as radio button (default behaviour).

In the `useEffect` above, it is fetching the custom renderers. This is collecting from `customRenderers.js`

File: `src/reactapp/src/paymentMethods/customRenderers.js`
```
export default async function getCustomRenderers() {
  const paymentMethodRenderers = await paymentFetcher.fetchDataFromPaymentMethods(
    'renderers.js',
    []
  );

  return paymentMethodRenderers.reduce(
    (renderers, item) => ({ ...renderers, ...item }),
    {}
  );
}
```
Here it loops through available payment methods and dynamically fetching the `renderers.js` file inside each payment method. Then merge them together to get the final custom payment renderers available.

#### How Custom Payment Renderer Interacts on Place Order Action
If your payment method needs to alter the behaviour of place order action, then Hyvä Checkout provides some features out of the box to help you out.

File: `src/reactapp/src/context/Form/CheckoutFormProvider.jsx`
```
...
function CheckoutFormProvider({ children }) {
  ...
  const [paymentActionList, setPaymentActions] = useState({});
  ...
  const registerPaymentAction = useCallback(
    (paymentMethodCode, paymentMethodAction) => {
      setPaymentActions(actions => ({
        ...actions,
        [paymentMethodCode]: paymentMethodAction,
      }));
    },
    [setPaymentActions]
  );
  ...
}
...
```
Here `CheckoutFormProvider` is one of the super parent components that wraps react app. As you can see in the code it has a state `paymentActionList` which can be populated with any custom payment action you want to perform when the "place order" action happens. See the `registerPaymentAction` function. This function is available for all the child components and thus a custom payment method component can use it to register a custom "place order" behaviour.

Suppose you have a custom payment method component `PayOneCreditCard` and it looks like below
```
function PayOneCreditCard({ method, selected, actions }) {
  const { registerPaymentAction } = useCheckoutFormContext();

  // custom "place order" submit action
  const paymentSubmitHandler = useCallback(
    async values => {
      console.log({ values });
      alert('yeeeha');
    },
    []
  );

  // registering custom "place order" action for the payment method
  useEffect(() => {
    registerPaymentAction('payone_creditcard', paymentSubmitHandler);
  }, [registerPaymentAction, paymentSubmitHandler]);

  return (
    // custom payment method JSX here
  );
}
```

So in the `useEffect`, we are registering custom place order action for the payment method. Now when the user opted `payone_creditcard` as the payment option and then click on the "Place Order" button, it will use the `paymentSubmitHandler` in this component to process the order. So now the payment method needs to convert the quote to order according to its need and then redirect the user to the success page.

### Custom Payment Method Best Practices

1. Define dedicated custom hooks for accessing global states such as `App`, `Cart` or `Form` within the payment method itself. There are hooks available in other places to get the global state. But, it is always better stay away from those custom hooks and define and use dedicated custom hooks within the payment method.

    So if you want to get an `App` action such as `setPageLoader` within your payment method, then your can do the following to retrieve it.

    File: `src/reactapp/src/paymentMethods/<yourPaymentMethod>/src/hooks/usePayOneAppContext.js`

        import { useContext } from 'react';

        import AppContext from '../../../../context/App/AppContext';

        export default function usePayOneAppContext() {
          const [, { setPageLoader }] = useContext(AppContext);

          return {
            setPageLoader,
          };
        }


    Now use `usePayOneAppContext` hook inside your `yourPaymentMethod`.

  2. Define your custom API methods within the payment method itself.

      Hyvä Checkout holds all of its api methods inside `src/reactapp/src/api/` directory. The components does not use any api methods defined here directly. Instead we are passing them through `AppContext` or `CartContext`. So if an API method needed in your payment method is already defined in the app, then access them through the corresponding context and use it with your payment method.

      But in some cases, your payment method needs to use its own custom api methods. In this case, it should be defined inside `src/reactapp/src/paymentMethods/<yourPaymentMethod>/src/api/` directory. When you define your custom API methods, it will be good to follow the conventions we already using in `src/reactapp/src/api/`.

      You can use your custom API methods directly inside the components. No need to setup a context and passing the api method through that context. But if your payment method is so complicated and you need a context layer to manage it effectively, then feel free to adopt that approach too.
