# Installation

1. Install via composer
    ```
    composer config repositories.hyva-themes/magento2-hyva-checkout git git@github.com:hyva-themes/magento2-hyva-checkout.git
    composer require hyva-themes/magento2-hyva-checkout
    ```
2. Enable module
    ```
    bin/magento setup:upgrade
    ```
# Configuration
In the Magento Backend Configuration:

`HYVA THEMES->Checkout->General Settings->Enable`

The configutation path is `hyva_checkout/general/enable`
