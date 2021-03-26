
# Hyvä Themes - Hyvä Checkout

[![Hyvä Themes](https://repository-images.githubusercontent.com/303806175/a3973c80-479c-11eb-8716-03e369d87143)](https://hyva.io/)

## hyva-themes/magento2-hyva-checkout
This module contains a ReactApp that can be used to build a Headless Magento checkout.

Compatible with Magento 2.3.4 and higher.

> **Note:**This module is heavily under construction. We recommend using the `develop` branch where a new version of the checkout is shaping into. Later, `master` would be replaced with `develop`.

## What does it do?
It loads a React Checkout at `[store-url]/hyva/checkout`. When enabled in `hyva_checkout/general/enable` it replaces the default checkout.

It depends on these two variables in localstorage:
 - `signin_token` to the `customer` section
 - `cartId` to the `cart` section

For Hyvä Themes of default Magento frontend, `hyva-themes/magento2-graphql-tokens` is needed to add these tokens to the `customerSections`.
