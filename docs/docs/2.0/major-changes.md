# Major changes.

## New features

- The react app is now powered by Vite.
- TailwindCSS is used in JIT mode.
- Multiple themes supported.

## Code level changes

In Hyvä Checkout 2.0, the directory structure is changed a bit. Given below the directory structure.
```
reactapp
|
|____vite.config.js
|
|____tailwind.config.js
|
|____index.html
|
|____tailwindcss
|
|____src
     |
     |____api
     |
     |____paymentMethods
     |
     |____app
          |
          |____code
          |
          |____themes/base
```

- `vite.config.js` - Vite related configurations reside here. Here is where we define dev, production related configuration, build configurations, proxy configurations etc.
- `tailwind.config.js` - TailwindCSS configuration of the app. The css file used in JIT mode resides in the `tailwindcss` directory along with other custom components.
- `index.html` - This is used in the dev mode to show the application
- `src/api` - API methods which communicates to Magento backend from the react app.
- `src/paymentMethods` - Custom payment renderers will be stored here (if any)
- `src/app/code` - The components which are common and can be used across different themes. These components can be contexts, FormikProvider components, custom hooks, utility methods, general react components etc.
- `src/app/design` - Themes reside here. By default, it comes with `base` theme.
