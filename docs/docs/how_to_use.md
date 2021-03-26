# How to use this module

Hyva-Checkout is essentially a Magento 2 module which provides a fast and extendible checkout
experience in a magento site. Since it is a part of Hyva-Themes, it is natural to assume
it would only work with hyva-themes. But, the truth is, it is not.

You can use this module with any Magento 2 sites. For example,

- Magento 2 sites using the luma or blank theme
- Magento 2 sites using a theme that inhertis luma/blank theme
- Magento 2 sites using the hyva-theme
- Magento 2 sites that works in headless
- Magento 2 sites that uses any kind of PWA.

## Any tweaks necessary if the site is not using hyva-theme

Well, the hyva-checkout using the tailwindcss in order to style the checkout page. Hence,
it is important to include the checkout page style css file if your site is not using
tailwindcss. It is handy to do this job too.

To include the css file, all you need to do is uncomment the css file entry in the below file:

File: `src/view/frontend/layout/hyvacheckout_checkout_index.xml`

```
<css src="Hyva_Checkout::css/styles.css" defer="defer"/>
```
