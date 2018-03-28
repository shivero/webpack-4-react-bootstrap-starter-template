# Webpack 4 starter template with React, Boostrap 4

> Starter template for projects that use webpack 4 in pair with React, Boostrap 4 and ES6 Javascript. This project contains configuration for development and production deploy using webpack 4 module bundler and tools which _might_ be helpfull

## Getting started

Make sure you install all dependencies first, run `npm -i` (shorthand for npm install)

```
npm i
```

To use configured development mode simply run

```
npm run start
```

To build all files for production run

```
npm run build
```

Output is minified via --mode flag which is set to production (already minified, optimized bundle)

Optionally there's configured task to export files with development mode (output is **not** minimized / optimized). To use it run

```
npm run dev
```

## What's already configured?

* **React** - create app components using Facebook's React Javascript UI library
* **Boostrap 4** - popular framework for building responsive, mobile-first sites
* **Babel** - transpile javascript ES6 code down to ES5
* **Extract Text Plugin** - extract styles to separate files
* **SASS Loader** - utilize modern SASS preprocessor to create styles for your app and compile them to .css
* **Html Webpack Plugin** - allows use of predefined html template (entry file: **./src/index.html**)
* **Webpack Dev Server** - serves an app and opens browser for development. Updates the browser on file changes.

## Project structure

* **/src** - here are all development files
* **/dist** - production output

## Tools used to make life a little better

* **eslint** - Javascript linter - configuration in **eslintrc.json** file
* **jshint** - Javascript linter - configuration in **.jshintrc** file

## License

This project is licensed under MIT license.
