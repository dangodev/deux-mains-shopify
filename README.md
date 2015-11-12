Deux Mains Shopify Template
---------------------------

Based on Shopify’s [Skeleton](https://github.com/Shopify/skeleton-theme) theme.
And by “based on,” I mean completely gutted and minimalized.

This theme favors simplicity over configuration. It requires the use of
[metafields.fields2](https://apps.shopify.com/metafields.fields2), and has virtually no global
settings but has product-specific settings.

### Installation

```
npm install
```

### Developing

Just run
```
gulp
````
when working to compile the necessary CSS / JS files. It’ll also spit out a `.zip`
file automatically to upload to Shopify.

If you don’t want to use the *.zip method it generates, delete the pertinent
lines in `gulpfile.js` and implement your own method.

Why Gulp? Gulp is included to take advantage of
[autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer), Sass
compilation + minification, and JS uglification + minification. These are too
good to just ditch, and isn’t worth bloating stylesheets with unnecessary
prefixes.

#### CSS

It uses [MVCSS](http://mvcss.io/). The rules:

1. Classes only; no IDs.
2. Don’t nest things; instead, define a **component**, and define everything else as a **submodule** of the base component (I still cheat this, but no nesting is the goal)
3. Single-responsibility. Each file is its own **component**. The contents of one file should not affect the styling in any other file.
4. One file per component.
5. **Components** get loaded in first; **Structures** get loaded in second. Use this to your advantage in cascading styles that may conflict.

The syntax:

- `.component`: the base element
- `.component--alt`: a modifier of an element. **Two hyphens.** You apply this like: `<div class="element element--mod">`. Slightly reduntant in HTML; highly efficient in CSS.
- `.component-module`: a scaffold (sub-component) of an element. **One hyphen**. All the sub-parts and associated parts within that component.
- `.has-component`: context (always starts with `has-`). Use this if you need a wrapper for the component
- `.is-viewing`: states (always startrs with `is-`). Use this for JavaScript-added classes to describe what it’s doing (`is-showing`, `is-hiding`, `is-alerting`, etc.)

#### JavaScript

The JavaScript is found in `javascripts/application.js`. It’s one object
(`DM` for _Deux Mains_) with modules defined for different purposes of the site,
arranged alphabetically.

### How Do I…

Read the [wiki](https://github.com/deux-mains/deux-mains-shopify/wiki).
