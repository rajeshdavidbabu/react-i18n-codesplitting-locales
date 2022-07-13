# react-i18n-codesplitting-locales

A simple react-i18n to code-split locale files using dynamic imports.

## Blog
https://medium.com/gitconnected/code-splitting-react-i18n-locales-using-dynamic-imports-97af247ad6f0

## Installation and Running

```js
npm install
npm run serve
// Open http://localhost:3000/?language=fr on the browser.
```

Currently supports three languages en, fr and ja. The application initially loads the language from the window's search query params and then also supports in-app language switching.

You can switch the language either through:

1. Window location's query params.
2. Or with select field inside the app.
