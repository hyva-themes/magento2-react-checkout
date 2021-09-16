# Setting up Hyvä Checkout

## Installation

The recommended approach is via composer. For that, follow below steps.

1. Install via composer

        composer config repositories.hyva-themes/magento2-hyva-checkout git git@github.com:hyva-themes/magento2-hyva-checkout.git

        composer require hyva-themes/magento2-hyva-checkout


2. Enable module
    ```
    bin/magento setup:upgrade
    ```
3. Apply theme specific changes (if any). You can find more details of this further down.

If you need to customize the checkout page, then it would be much better you fork the original repository and use the forked version in your site. This way, you can keep and versioning the customization you are making in that forked repository. This is the recommended approach when it comes to the customizing the Hyvä Checkout.

Another approach would be setting up Hyvä Checkout inside `app/code` directory. To do this, you need to create the directory `app/code/Hyva/Checkout` and then copy the content of `src/` directory of Hyvä Checkout module over there. This will also allow you to track the customizations.

!!! Note "The experimental solution for Hyvä Checkout"
    There does exist an another approach, probably the best customization approach for Hvyä Checkout out there. It is provided by [**Jisse Reitsma**](https://twitter.com/jissereitsma) and you can find the solution here [**Yireo_ExampleHyvaCheckout**](https://github.com/yireo-training/Yireo_ExampleHyvaCheckout)

    In this approach, we can create a custom module and it will allow us to extend only those react component which needs to be modified for the desired result. This is a flexible solution and we endorse it. Do check it out!
## Configuration

Once the module is available in your site, you can see the checkout page at the url `[store-url]/hyva/checkout`.

If you want to make Hyvä Checkout as your default checkout solution, then enable the below configuration in the Magento2 Backend:

`HYVA THEMES->Checkout->General Settings->Enable`

The configuration path is `hyva_checkout/general/enable`

## Additional Steps - Hyvä Themes

Both Hyvä Themes and Hyvä Checkout use TailwindCSS for styling. In a Hyvä Themes based site, it does not make sense to include `Hyva_Checkout::css/styles.css` stylesheet because of the following reasons.

1. It adds an additional style sheet in the site. One more style sheet means one more render-blocking resource in the browser.
2. The style sheet holds lot of duplicated styles since both using the TailwindCSS.

Due to these reasons, it is better to add Hyvä Checkout styled components in the TailwindCSS purge directory list of your Hyvä Themes based site. You can find more details of this in the official documentation of Hyvä Themes: [**Tailwind Purging settings**](https://docs.hyva.io/doc/tailwind-purging-settings-goVaHblLAR)

Below is the bare minimum steps you need to do in order to achieve it.

1. You need to setup a child theme in your site. It should be inherited from `Hyva/default` theme. For the sake of simplicity, I am calling this child theme as `Hyva/custom`.
2. Copy over the web directory from `vendor/hyva-themes/magento2-default-theme/web/` to your own theme `app/design/frontend/Hyva/custom/web/`
3. Edit the `tailwind.config.js` file inside your theme and add following lines inside purge directory list.

```
module.exports = {
    ...
    purge: {
        content: [
            ...
            // Hyva checkout components
            '../../../../../../../vendor/hyva-themes/magento2-hyva-checkout/src/reactapp/src/**/*.jsx',
            '../../../../../../../vendor/hyva-themes/magento2-hyva-checkout/src/view/frontend/templates/react-container.phtml',
            ...
        ]
    }
}
...
```

With these changes in place, Hyvä Checkout styles will be also considered by your theme and thus you will see a stylized checkout page in your store.

## Additional Steps - Luma Theme

For Luma theme based site, Hyvä Checkout module works out of box. This is because the stylesheet responsible for the Hyvä Checkout styles `Hyva_Checkout::css/styles.css` is already included through a layout update.

!!! Warning "In a Luma based theme"

    You would encounter some CSS problems. This is because we are using Tailwind CSS for the styling of the checkout page and since this is a different CSS approach that is being used in the Luma theme, some CSS conflicts should be expected.

## Additional Steps - Headless Solutions

You are required to include the stylesheet `Hyva_Checkout::css/styles.css` and the js file `Hyva_Checkout::js/react-checkout.js` in your checkout page. These two static resources are already included through layout update. But, if your headless solution does not respect the layout update, then it is your job to include them in your checkout page.

You need to pass the checkout related configurations (from Magento 2 backend) to the ReactApp. This is currently managed through data attributes in the below HTML DOM element.

File:  `src/view/frontend/templates/react-container.phtml`

```
<div
    id="react-checkout"
    data-base_url="<?= $block->getBaseUrl() ?>"
    data-static_file_path="<?= $block->getViewFileUrl('Hyva_Checkout/js') ?>"
    data-checkout_config="<?= $escaper->escapeHtmlAttr($configProvider->getConfig()) ?>"
>
```
Same thing you should do in your headless approach.

Ideally, these information must be managed through a custom graphql query. This way, it would be compatible with any type of frontend solution. It will be resolved in a future version of Hyvä Checkout.
