# Simple Vuejs with Vue-router & Vuex boilerplate

Extended from https://github.com/vuejs-templates/webpack and included the following features.

- [Vuex][0]
- [Yarn][1]
- [Stylelint][2]

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Project Structure
List and explanation taken from [vue-templates/webpack][3] documentation.

```
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
|   ├── router/                 # vue-router config
│   │   └── ...
|   ├── store/                  # vuex config
│   │   └── ...
│   ├── assets/                 # module assets (processed by webpack)
|   └── styles
|       └── ...                 # sass files
│       └── ...
├── static/                     # pure static assets (directly copied)
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .stylelint.rc.js            # stylelint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
├── package.json                # build scripts and dependencies
└── yarn.lock                   # yarn lock file
```
### Explanation

`build/`

This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at build/webpack.base.conf.js.

`config/index.js`

This is the main configuration file that exposes some of the most common configuration options for the build setup.

`src/`

This is where most of your application code will live in. How to structure everything inside this directory is largely up to you.

`static/`

This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated. You can place static assets such as bootstrap css/js or fonts here.

`index.html`

This is the template index.html for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will be automatically injected into this template to render the final HTML.

`package.json`

The NPM package meta file that contains all the build dependencies and build commands.


[0]: https://github.com/vuejs/vuex
[1]: https://yarnpkg.com/en/
[2]: https://github.com/stylelint/stylelint
[3]: http://vuejs-templates.github.io/webpack/structure.html
