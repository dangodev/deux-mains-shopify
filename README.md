Deux Mains Shopify Template
---------------------------

Based on Shopify’s [Skeleton](https://github.com/Shopify/skeleton-theme) theme.
And by “based on,” I mean completely gutted and minimalized.

This theme favors simplicity over configuration. It requires the use of
[metafields.fields2](https://apps.shopify.com/metafields.fields2), and has virtually no global
settings but has product-specific settings.

### Installation

1. Install [Shopify Theme Kit](http://themekit.cat/)
1. `npm install`

### Developing

The app is structured like:

```
├── dist/
│   └── (Production template)
└── src/
    ├── javascripts/
    └── stylesheets/
```
#### Making template changes

Edit the appropriate file in `dist/`. These files are **not** processed
in any way, just for simplicity.

#### Making CSS/JS changes

Edit the appropriate file in `src/`. These files **are preprocessed**.

- Sass is handled with [node-sass](https://github.com/sass/node-sass),
  then [Autoprefixer](https://github.com/postcss/autoprefixer), then
  [cssnano](https://github.com/ben-eb/cssnano)
- JS is handled with Babel/ES6

When editing, you can compile either by running `webpack -p`. Or you
can compile as you work with `webpack -p --watch`.

### CSS

The CSS is [MVCSS v5](http://mvcss.io/). Basically SMACSS/BEM-ish.

### JS

The JavaScript is [modular](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)
ES6. This helps you keep your bundle size—and your sanity—in check. And
makes it super easy to use NPM modules.

