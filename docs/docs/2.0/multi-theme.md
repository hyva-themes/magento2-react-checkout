# Multi Themes

Hyvä Checkout 2.0 come up with multi theme support. This allow developers multiple starting points from which they can choose the suitable theme and start to customize it. That is going to save a ton of times at the starting point itself.

## Theme starting points available.

Hyvä Checkout 2.0 contains the base theme already. It is same as the theme we are currently using in the `1.0` version. Other themes currently available are:

- [Lumazon theme](https://github.com/rajeev-k-tomy/hyva-checkout-steps-theme)

## How to configure a theme

The instructions to use an external theme will be explained in detail in the theme repository. In a nutshell, you are doing this through `package.json` file. Update the `package.json` as shown below

```
"config": {
    "themeRepositories": {
        "lumazon": "git@github.com:rajeev-k-tomy/hyva-checkout-steps-theme.git"
    }
},
```

After this, run `npm install`. This will add the theme into the codebase.

Finally the root component of the theme needs to be specified in the `src/reactapp/src/app/code/checkoutForm/CheckoutForm.jsx` file.


```
import LumazonTheme from '../../themes/lumazon/Index';
...
...
return (
    <CheckoutFormWrapper initialData={initialData}>
      <BasLumazonThemeeTheme />
    </CheckoutFormWrapper>
);
```

Please note some of the concept here can be changed in a later stage. For now, there are some manual work such as above.
