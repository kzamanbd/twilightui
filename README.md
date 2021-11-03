# Tailwind Dashboard
[![Netlify Status](https://api.netlify.com/api/v1/badges/8b7feafc-5a97-4395-aa31-e612c42df8f9/deploy-status)](https://app.netlify.com/sites/tailwind-dashboard-alpinejs/deploys)

A multi theme, completely accessible, with components and pages examples, ready for production dashboard.

🧪 [See it live](https://zamanz.github.io/tailwind-dashboard/index.html)

Setting up a tailwind css based project needs to install the tailwindcss npm package, postcss and autoprefixer - it also requires to configure a tailwind.config.js as well as postcss.config.js (optional, if you're planning to use postcss) and then configure those files manually.

And finally for building the production code with tree-shaking (removing unused css from your project and keeping only what is required) you need to configure the purge settings in your tailwind configuration. For someone new to tailwind and for others who regularly use tailwind in their projects, these are boring jobs and you have to do it repeatedly for every project (or learn how to do it if someone is just starting with tailwind)

So this boilerplate has all the configuration to save your time from this boring configuration tasks (and from googling many things)

Use this boilerplate as the starting point for your **Tailwind CSS** based projects.

### start
```sh
git clone https://github.com/zamanz/tailwind-dashboard.git
cd tailwind-dashboard
npm install
npm run dev
```

### build
```sh
npm run build
```

then grab everything from the dist folder

### change server port
Just change the port number in `vite.config.js` file
```javascript
export default {
    plugins: [],
    server: {
      open: '/index.html',
      port: 3020, //< -change this
    }
}

```

### configure tailwind
There is a `tailwind.config.js` file with `purge` instructions and extra colors, feel free to customize it according to your need


(TODO: add links)

- Tailwind CSS
- Tailwind Forms
- PostCSS
- Alpine.js
- Chart.js (charts)
- UI Faces (avatars)
