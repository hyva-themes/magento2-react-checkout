
# Hyvä Themes - Hyvä Checkout

[![Hyvä Themes](https://repository-images.githubusercontent.com/303806175/a3973c80-479c-11eb-8716-03e369d87143)](https://hyva.io/)

## hyva-themes/magento2-hyva-checkout

![Supported Magento Versions][ico-compatibility]

This module contains a ReactApp that can be used to build a Headless Magento checkout.

Compatible with Magento 2.3.4 and higher.

## What does it do?
It loads a React Checkout at [store-url]/hyva/checkout. When enabled in `hyva_checkout/general/enable` it replaces the default checkout.

It depends on these two variables in localstorage:
 - `signin_token` to the `customer` section
 - `cartId` to the `cart` section

For Hyvä Themes of default Magento frontend, `hyva-themes/magento2-graphql-tokens` is needed to add these tokens to the `customerSections`.

## Installation

1. Install via composer
    ```
    composer config repositories.hyva-themes/magento2-hyva-checkout git git@github.com:hyva-themes/magento2-hyva-checkout.git
    composer require hyva-themes/magento2-hyva-checkout
    ```
2. Enable module
    ```
    bin/magento setup:upgrade
    ```
## Configuration

In the Magento Backend Configuration:

`HYVA THEMES->Checkout->General Settings->Enable`

The configuration path is `hyva_checkout/general/enable`

## Documentation

You can find the documentation here: https://hyva-themes.github.io/magento2-hyva-checkout/

## Credits

- [Willem Wigman][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.txt) for more information.

[ico-compatibility]: https://img.shields.io/badge/magento-%202.3%20|%202.4-brightgreen.svg?logo=magento&longCache=true&style=flat-square

[link-author]: https://github.com/wigman
[link-contributors]: ../../contributors
