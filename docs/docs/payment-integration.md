# Payment Integration
In Hyvä Checkout, the payment options will be shown as radio inputs by default. You can choose the option and place the order, and everything works out of the box.

But showing just a radio input box and allowing you to select/deselect them is not what you needed for all payment options. Some payment methods need different behaviour. Also, some payment methods need a separate flow when we perform the "place order" action. To help you out in such cases, Hyvä Checkout already possesses some superpowers which we will see in a short time.

## Payment Supports
Payment methods integration is in progress. We don't have any plans to keep payment components as part of Hyvä Checkout. But, we will be maintaining separate payment repositories which will hold the custom payment method components which you can use with Hyvä Checkout seamlessly.

Below, we are listing the payment repositories, and each repository will have specific instructions about its usage.

- [hyva-themes/magento2-hyva-checkout-payone](https://github.com/hyva-themes/magento2-hyva-checkout-payone)

We are open to contributions here as the payment options available out there are many, and you all can help you out to grow the above list.
_____________

Now, it is time to get to know some technical aspect of the payment integration which you can do with Hyvä Checkout.

## How can we collect the payment configurations?
Depending upon the payment methods, you may have some special configuration settings in your store. Usually, you do this under `Stores > Configuration`. If you are familiar with the default Magento 2 checkout page, then you may know that Magento 2 passes this configuration via a global variable which you can find at `window.checkoutConfig`.

To collect these checkout configurations, we have a ViewModel available in the module. You can find this ViewModel in the path `src/ViewModel/CheckoutConfigProvider.php`. So to make payment configurations available to the checkout page, you need to do the following steps.

1. Include the ViewModel via the layout file.

    File: `src/view/frontend/layout/hyvacheckout_checkout_index.xml`


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


2. Pass the payment configuration via `data-payment` attribute.

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


With these changes in place, now the react app has access to the payment configurations, and it can be used in the application according to your need.

## Custom Payment Renderer
As already stated, by default, all payment methods appear as a radio input. But Hyvä Checkout allows using a custom renderer for any payment methods. All you need to do is add your custom payment method component in the `src/reactapp/src/components/paymentMethod/customRenderers.js` file. This js file exports an empty object (`{}`) by default. But if you specify your custom payment method component, then the react app will use your custom component in order to render the payment method. For example,

File: `src/reactapp/src/components/paymentMethod/customRenderers.js`

```
import CreditCard from '../payone/components/creditCard/CreditCard';

export default {
  payone_creditcard: CreditCard,
};
```

Here `payone_creditcard` is the payment method code and `CreditCard` is the custom payment method component.

## How To Interact With Place Order
If your payment method needs some special functions to carry out or if your payment method wants to alter the behaviour of place an order, then Hyvä Checkout provides some features out of the box to help you out.

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
