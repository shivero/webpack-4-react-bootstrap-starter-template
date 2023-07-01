# Webpack 4 starter boilerplate template with React, Bootstrap 4

> Starter template for projects that use Webpack 4 in conjunction with React, Bootstrap 4 and ES6 JavaScript. This project contains configuration for development and production deployment using the Webpack 4 module bundler and tools that might be helpful.


## Getting started

Make sure to install all dependencies first, run npm -i (shorthand for npm install).
Compatible with
``` 
Node 16.19.1 
```

```
npm i
```

To use configured development mode simply run

```
npm run start
```

To build all files for the production run

```
npm run build
```

An output is minified via --mode flag (default `'production'` - already minified, optimized bundle) - additionally, the **/dist** directory is removed each time you run this script to make sure there are no artifacts left in the output location.

You can choose to export files in development mode (the output is not minimized or optimized). To use it, run

```
npm run dev
```

## What's already configured?

* **React** - create app components using Facebook's React Javascript UI library
* **Bootstrap 4** - popular framework for building responsive, mobile-first sites
* **Babel** - transpile javascript ES6 code down to ES5
* **Extract Text Plugin** - extract styles to separate files
* **SASS Loader** - utilize modern SASS preprocessor to create styles for your app and compile them to .css
* **Html Webpack Plugin** - allows use of predefined HTML template (entry file: **./src/index.html**)
* **File Loader** - allows use of media files in project via emitted URL
* **Image Webpack Loader** - compress source images in build with imagemin
* **Webpack Dev Server** - serves an app and opens a browser for development. Updates the browser on file changes.

## Project structure

* **/src** - here are all development files
* **/dist** - production output, imported libraries are bundled into separated vendor.[hash].js, while rest of components are in app.[hash].js (same for styles)

## Tools used to make life a little better

* **eslint** - Javascript linter - configuration in **eslintrc.json** file
* **jshint** - Javascript linter - configuration in **.jshintrc** file

## License

This project is licensed under MIT license.
