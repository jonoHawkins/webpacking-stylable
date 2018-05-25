I'd love to use stylable but I've been having trouble with creating webpack production builds 😞. This repo is me trying to work out how to do it. Here's an overview:

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

I've tried it with node 8.9.4 and 9.11.1, and webpack 4.8.3 and 4.6.0.

## Getting Started

```
$ yarn install
$ yarn works // runs webpack in dev mode
$ yarn buggy // runs webpack in dev mode
```