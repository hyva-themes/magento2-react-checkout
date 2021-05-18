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

## Any tweaks necessary if the site is not using hyva-theme?

Well, the hyva-checkout using the tailwindcss in order to style the checkout page. Hence,
it is important to include the checkout page style css file if your site is not using
tailwindcss. It is handy to do this job too.

To include the css file, all you need to do is uncomment the css file entry in the below file:

File: `src/view/frontend/layout/hyvacheckout_checkout_index.xml`

```
<css src="Hyva_Checkout::css/styles.css" defer="defer"/>
```

## Changes you want to do in a hyva-theme based site

Both hyva-theme and hyva-checkout uses tailwindcss to style the pages. In a hyva-theme based site, it does not make sense to include `Hyva_Checkout::css/styles.css` stylesheet because of the following reasons.

1. It adds an additional style sheet in the site. One more style sheet means one more reder blocking in the browser
2. The style sheet holds lot of duplicated styles since both using the tailwindcss.

Due to this, it is better to add hyva-checkout components in the tailwindcss purge directory list in your hyva-theme based site. You can find more details of this in the official documentation of hyva: [Tailwind Purging settings](https://docs.hyva.io/doc/tailwind-purging-settings-goVaHblLAR)

Below is the bare minium things you need to do

1. You need setup a child theme in your site. It should be inherited from `Hyva/default` theme. For the sake of simplicity, I am calling this child theme as `Hyva/custom`.
2. Copy over the web directory from `vendor/hyva-themes/magento2-default-theme/web/` to your own theme `app/design/frontend/Hyva/custom/web/`
3. Edit the `tailwind.config.js` file inside your theme and add following lines inside purge directory list.

```
module.exports = {
    ...
    purge: {
        content: [
            ...
            // Hyva checkout components
            '../../../../../../../vendor/hyva-themes/magento2-hyva-checkout/src/reactapp/src/components/*.jsx',
            '../../../../../../../vendor/hyva-themes/magento2-hyva-checkout/src/reactapp/src/components/**/*.jsx'
            ...
        ]
    }
}
...
```

With these changes, Hyva-checkout styles will be also considered by your theme and thus you will see a stylish hyva checkout page by default.
