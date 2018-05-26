I was having trouble getting Stylable to work with production webpack builds but the lovely people over there help me get it working 😍. You can see the thread [here](https://github.com/wix/stylable/issues/325).

## Getting Started

```
$ yarn install
$ yarn dev // runs webpack in dev mode
$ yarn prod // runs webpack in prod mode
```

## What the problem was...

- There is an entry that imports a .st.css file and a second module that itself imports a .st.css file.
- Bundling works with webpack in development mode.
- Bundling appears to work in production mode, but gives the following runtime error:

```
bootstrap:19 Uncaught TypeError: Cannot read property 'call' of undefined
    at n (bootstrap:19)
    at Object.<anonymous> (index.st.css:12)
    at n (bootstrap:19)
    at bootstrap:68
    at bootstrap:68
```
- If you remove the .st.css import from the second module everything is happy again.

## The fix (for now)

Set your webpack stylable plugin config to:

```js
new StylableWebpackPlugin({
    "outputCSS": false,
    "includeCSSInJS": true,
    "createRuntimeChunk": true,
    "optimize": {
        "removeUnusedComponents": true,
        "removeComments": true,
        "removeStylableDirectives": true,
        "classNameOptimizations": true,
        "shortNamespaces": true
    }
})
```
