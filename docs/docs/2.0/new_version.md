# New Experimental Version of Hyvä Checkout

A new experimental version of Hyvä Checkout, [**2.0-develop**](https://github.com/hyva-themes/magento2-hyva-checkout/tree/2.0-develop), is now available and it is worth to check it out. The key features of this new phase are:

- React app is now powered by modern React frontend tool - [**Vite**](https://vitejs.dev/).
- TailwindCSS in JIT mode.
- It support multiple themes.

## The inevitable shift to Vite
The React app embedded in the stable version (1.0) is powered by [**create-react-app**](https://github.com/facebook/create-react-app). It performs well if you compare it with Luma checkout customization. But, if you are from a React world, you will eventually find the app lags a little in its performance. It has currently a noticeable launching time when you start the app in development mode and it re-renders slowly too. Create-react-app is great and really stable and is powered by webpack. But, it is time to move to a most modern frontend tool and we choose `Vite` for it.

Vite is really really fast. There is no lag. The app launches fast and the HMR is almost instantaneous!!! You are going to love it once it is used.

## TailwindCSS is JIT mode

The `1.0.x` version of the Hyvä Checkout uses development version of TailwindCSS file in the application. This will limit you some time when you add some utility classes and in order to make it work, you need to adjust TailwindCSS settings and relaunch the app again.

In this new version, the TailwindCSS is used in JIT mode. So when you add a new style which is not being used before, you don't need to relaunch it again in order to see the style applied in the frontend. It gives you all the cool features TailwindCSS provides in the JIT mode. So checkout the [documentation of TailwindCSS JIT mode](https://v2.tailwindcss.com/docs/just-in-time-mode) to understand the features and all.

## Multiple Theme Support

The new version also supports multiple themes. The current UI of Hyvä Checkout is really nice and works well. However, it makes lot of sense to have multiple theme starting points for Hyvä Checkout so that you can choose whichever theme more suits your needs and customize it from there. We really hope this will save a lot of efforts at the starting itself. How cool is that 😎
