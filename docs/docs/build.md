# How can build the Hyvä-Checkout app
In the build process, you are making the react application ready for use as a Magento module.

In a normal circumstance, you don't need to do this process. However, if you want to customize
the react app in a way you needed, then you need to alter the react components by your own. In this
case, knowing the build process is necessary in order to get your changes reflected in the site.

## Prerequisites
It is required that you have the tool [csso-cli](https://www.npmjs.com/package/csso-cli) installed globally. It is using to optimize the CSS file that would be generated in the build process.
```
npm i -g csso-cli
```

## How can you build the app

You can build the react app with the below command
```
NODE_ENV=production npm run build
```
## What happens when we build the react application?

Primarily 2 goals here.

1. Create a fully optimized style file that can be included in the Magento site (if needed)
2. Create a fully optimized production build of the react app into a js file that can be included in the Magento site.

The console output of the build process is given below:
```
$ NODE_ENV=production npm run build

> tailwindcss build src/asset/css/tailwind.css -o public/tailwind.output.css

   tailwindcss 1.9.6

   🚀 Building: src/asset/css/tailwind.css

   ✅ Finished in 2.61 s
   📦 Size: 18.43KB
   💾 Saved to public/tailwind.output.css

> npx csso public/tailwind.output.css --output public/styles.css

> react-app-rewired build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  70.76 KB  ../view/frontend/web/js/react-checkout.js

> cp public/styles.css ../view/frontend/web/css/styles.css &&  npm run output-success

Done!
```

As you can see above, the very first step is tailwindcss build process. It using the tailwindcss base file located at `src/reactapp/src/asset/css/tailwind.css`. In this build process, it will be basically doing the purge operation. The resulting file is located at `src/reactapp/public/tailwind.output.css`. This file is what we are using in the react app if you open it in the development mode.

Next step is optimizing the `src/reactapp/public/tailwind.output.css` file. We are using the tool [csso-cli](https://www.npmjs.com/package/csso-cli) for that. The Optimized css file can be found at `src/reactapp/public/styles.css`.

Next, it will be creating the production build of the react app and the resulting file will be store in the location `src/view/frontend/web/js/react-checkout.js`. This js file will be included in the DOM by the module and thus it will do the react magic on the page.

Finally, the optimized `src/reactapp/public/styles.css` file will be copied over to the location `src/view/frontend/web/css/styles.css`. This style file can be included in the page if in case you are using this module out of hyva.

To do this, file: `src/view/frontend/layout/hyvacheckout_checkout_index.xml`, uncomment the following line you would find there.
```
<css src="Hyva_Checkout::css/styles.css" defer="defer"/>
```
