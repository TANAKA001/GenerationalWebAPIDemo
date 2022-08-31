# SASS Lint and Structure

---

Classes are sorted in the order they first used in the HTML templates. Any CSS generate from the SASS in the `_scss` folder will be globally available by the app. Class properties are sorted in concentric order.

## SCSS Folder Structure

### Base Folder

The `base` director contains the master reset for the application. It contains all base HTML elements and **NO Classes**. This gives all HTML elements a common style across browsers that fall inline with the application design.

The application does not use a global style reset like Normalize.css. Using a CSS reset removes all styles, then requires you to style the elements again. The CSS in the base folder covers everything in Normalize and only requires you to style things once. It also lets you write less CSS because all HTML elements have styles inline with the design.

### Components Folder

Components folder contains CSS component files. These are for common components that do not require a Vue component. Each SCSS component should have its own file.

Component SCSS files are imported individually into the `styles.scss` file. Comment out imports for components not in use for lighter SCSS.

### Functions Folder

Folder contains useful SASS functions. Should only contain SASS function.

### Helpers Folder

Folder contains useful classes that are used regularly independently of components.

Helper SCSS files are imported individually into the `styles.scss` file. Comment out imports for helper files not in use for lighter CSS.

### Mixins Folder

Folder contains useful SASS mixins. Should only contain SASS mixins.

### Variables Folder

Folder contains SASS variables for all global styles. Should only contain SASS variables.

## Concentric CSS Property sort order

CSS properties should be sorted in concentric CSS order. See here for more: [Concentric CSS](https://rhodesmill.org/brandon/2011/concentric-css/)

Running SASS lint Auto Fix will sort the properties when you run it. Concentric is set in the `.sass-lint.yml` file

```YML
  property-sort-order:
    - 1
    - order: concentric
```

## SASS Linting

Install globally [link](https://www.npmjs.com/package/sass-lint)

```
npm install -g sass-lint
```

Sass-lint can be configured from a `.sass-lint.yml`

SASS Lint can be run with

```
npm run sass-lint
```

### SASS Lint Auto Fix

Install globally [link](https://www.npmjs.com/package/sass-lint-auto-fix)

```
npm install -g sass-lint-auto-fix
```

Sass-lint-auto-fix requires sass-lint to run

Run with

```
npm run lint:fix
```
