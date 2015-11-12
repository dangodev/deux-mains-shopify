Deux Mains Shopify Template
---------------------------

Based on Shopify’s [Skeleton](https://github.com/Shopify/skeleton-theme) theme.
And by “based on,” I mean completely gutted and minimalized.

This theme favors simplicity over configuration. It requires the use of
[metafields.fields2](https://apps.shopify.com/metafields.fields2), and has virtually no global
settings but has product-specific settings. It uses [MVCSS](http://mvcss.io/), a
scalable CSS paradigm of Base Element → Modifiers → Scaffolding that employs
single-responsibility, class-only, and (virtually) no-nesting philosophies. The
JavaScript is just, uh, jQuery.

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

The way that Shopify’s asset pipeline & liquid templates are so deeply embedded
into its system, unfortunately there’s not a way to truly develop locally. I
originally had an easy-to-use [Middleman](https://middlemanapp.com/) static site, but
tossed it because it turned out to be too much micro-management converting `.liquid`
to pure `.erb` and vice-versa (but I’d still recommend starting with Middleman
anyway, until it comes time to port to Shopify).

Gulp is included to take advantage of
[autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) as well as JS
uglification. These are too good to just ditch, and isn’t worth bloating
stylesheets with unnecessary prefixes.

### How Do I…

Read the [wiki](https://github.com/deux-mains/deux-mains-shopify/wiki).
