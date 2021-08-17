# Installation

1. Install via composer

        composer config repositories.hyva-themes/magento2-hyva-checkout git git@github.com:hyva-themes/magento2-hyva-checkout.git

        composer require hyva-themes/magento2-hyva-checkout


    !!! attention "Attention please"
        We have a new version of hyvä checkout available in the branch `develop`. It is almost stable and we are testing it internally. It will be published as the first stable release soon. The new version supports all type of products and much more extendable. We highly recommend to use the `develop` branch in your project too. For that, use the below command:


            composer config repositories.hyva-themes/magento2-hyva-checkout git git@github.com:hyva-themes/magento2-hyva-checkout.git

            composer require hyva-themes/magento2-hyva-checkout dev-develop


2. Enable module
    ```
    bin/magento setup:upgrade
    ```
# Configuration
In the Magento Backend Configuration:

`HYVA THEMES->Checkout->General Settings->Enable`

The configuration path is `hyva_checkout/general/enable`
