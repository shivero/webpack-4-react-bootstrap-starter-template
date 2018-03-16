# webpack-4-starter-template

> Starter template for projects that use webpack 4. This project contains configuration for development and production deploy using webpack 4 module bundler and tools which _might_ be helpfull

## Getting started

Make sure u install all dependencies first, run `npm -i` (shorthand for npm install)
```npm -i```

To use configured development mode simply run
```npm run start```
To build all files for production run
```npm run build```
Output is minified via --mode flag which is set to production (already minified, optimized bundle)

Optionally there's configured task to export files with development mode (output is **not** minimized / optimized). To use it run
```npm run dev```

## What's already configured?

* html-webpack-plugin - allows use of predefined html template (entry file: **index.html**)
* webpack-dev-server - serves an app and opens browser on default port (**8080**). Updates the browser on changes.

## Project structure

* /src - here are all development files
* /dist - production output

## Tools used to make life a little better

* eslint - Javascript linter - configuration can be found in **eslintrc.json** file

## License

This project is licensed under MIT license.
